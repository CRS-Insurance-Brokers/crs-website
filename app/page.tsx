import { Suspense } from "react";
import { RiddorFlow } from "@/components/flow/RiddorFlow";

export default function Home() {
  return (
    <Suspense fallback={null}>
      <RiddorFlow />
    </Suspense>
  );
}
