import React from "react";
import { Card, Skeleton } from "@nextui-org/react";

export default function SkeletonComp() {
  return (
    <Card className="w-[400px] space-y-5 p-4" radius="lg">
      <Skeleton className="rounded-lg">
        <div className="h-24 rounded-lg bg-default-300"></div>
      </Skeleton>
      <div className="space-y-3">
        <Skeleton className="w-1/4 rounded-lg">
          <div className="h-3 w-1/4 rounded-lg bg-default-200"></div>
        </Skeleton>
        <Skeleton className="w-1/4 rounded-lg">
          <div className="h-3 w-1/4 rounded-lg bg-default-200"></div>
        </Skeleton>
        <Skeleton className="w-1/4 rounded-lg">
          <div className="h-3 w-1/4 rounded-lg bg-default-300"></div>
        </Skeleton>
      </div>
    </Card>
  );
}
