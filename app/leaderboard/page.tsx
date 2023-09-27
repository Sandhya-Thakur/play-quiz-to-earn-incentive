"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function LeaderBoard() {
  return (
    <div>
      <Link href="/">
        <Button>dashboard</Button>
      </Link>
    </div>
  );
}
