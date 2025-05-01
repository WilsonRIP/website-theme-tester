"use client";

import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

export function ToastDemo() {
  const { toast } = useToast();

  return (
    <div className="flex flex-wrap gap-4">
      <Button
        variant="outline"
        onClick={() => {
          toast({
            title: "Default Toast",
            description: "This is a default toast notification",
          });
        }}
      >
        Default Toast
      </Button>

      <Button
        variant="default"
        onClick={() => {
          toast({
            title: "Success Toast",
            description: "Your action was completed successfully!",
            variant: "default",
          });
        }}
      >
        Success Toast
      </Button>

      <Button
        variant="destructive"
        onClick={() => {
          toast({
            title: "Error Toast",
            description: "There was a problem with your request",
            variant: "destructive",
          });
        }}
      >
        Error Toast
      </Button>
    </div>
  );
}
