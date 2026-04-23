import { Suspense } from "react";
import { RiddorFlow } from "@/components/flow/RiddorFlow";

export default function RiddorPage() {
  return (
    <Suspense fallback={null}>
      <RiddorFlow />
    </Suspense>
  );
}
