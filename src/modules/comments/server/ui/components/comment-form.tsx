import { useClerk, useUser } from "@clerk/nextjs";
import { UserAvatar } from "@/components/ui/user-avatar";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { commentFormSchema } from "../../../../../db/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { trpc } from "@/trpc/client";
import { toast } from "sonner";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../../../../../components/ui/form";

interface CommentFormProps {
  videoId: string;
  parentId?: string;
  onSuccess?: () => void;
  onCancel?: () => void;
  variant?: "comment" | "reply";
}

export const CommentForm = ({
  videoId,
  parentId,
  onSuccess,
  onCancel,
  variant = "comment",
}: CommentFormProps) => {
  const { user } = useUser();
  const utils = trpc.useUtils();
  const clerk = useClerk();
  const create = trpc.comments.create.useMutation({
    onSuccess: () => {
      utils.comments.getMany.invalidate({ videoId });
      utils.comments.getMany.invalidate({ videoId, parentId });
      form.reset();
      toast.success("Comment added");
      onSuccess?.();
    },
    onError: (error) => {
      toast.error("Something went wrong");
      if (error.data?.code === "UNAUTHORIZED") {
        clerk.openSignIn();
      }
    },
  });

  const form = useForm<z.infer<typeof commentFormSchema>>({
    resolver: zodResolver(commentFormSchema),
    defaultValues: {
      parentId,
      videoId,
      value: "",
    },
  });

  const handleSubmit = (values: z.infer<typeof commentFormSchema>) => {
    if (values.value === "") {
      console.log("value");
      toast.error(
        `Please fill in ${variant === "comment" ? "Comment" : "Reply"} field`
      );
      return;
    }
    create.mutate(values);
  };

  const handleCancel = () => {
    form.reset();
    onCancel?.();
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="flex gap-4 group"
      >
        <UserAvatar
          size="lg"
          imageUrl={user?.imageUrl ?? "/user-placeholder.svg"}
          name={user?.username ?? "User"}
        />
        <div className="flex-1">
          <FormField
            name="value"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    {...field}
                    placeholder={
                      variant === "reply"
                        ? "Reply to this comment..."
                        : "Add a comment"
                    }
                    className="resize-none bg-transparent overflow-hidden min-h-0"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="justify-end gap-2 mt-2 flex">
            {onCancel && (
              <Button variant="ghost" type="button" onClick={handleCancel}>
                Cancel
              </Button>
            )}
            <Button disabled={create.isPending} type="submit" size="sm">
              {variant === "reply" ? "Reply" : "Comment"}
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
};
