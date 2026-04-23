"use client";

import { useState } from "react";
import { Checkbox } from "@/components/ui/Checkbox";

export function KitchenSinkCheckboxes() {
  const [first, setFirst] = useState(true);
  const [second, setSecond] = useState(false);
  return (
    <div className="mt-2">
      <Checkbox checked={first} onCheckedChange={setFirst}>
        Checked &mdash; bordered primary, label reads next to the box.
      </Checkbox>
      <Checkbox checked={second} onCheckedChange={setSecond}>
        Unchecked &mdash; bordered line, toggles with Space or click.
      </Checkbox>
    </div>
  );
}
