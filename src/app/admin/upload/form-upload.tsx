"use client";
import type { KyThi } from "@prisma/client";
import { startTransition, useActionState } from "react";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardHeader } from "~/components/ui/card";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { uploadExcel } from "~/server/actions/khoahoc.actions";

export default function FormUpload({ listKyThi }: { listKyThi: KyThi[] }) {
  const [actionState, action, isPending] = useActionState(uploadExcel, {
    errors: { message: "" },
    data: [],
    success: "",
  });

  console.log("aaa data", actionState.data);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    startTransition(() => {
      action(formData);
    });
  }

  return (
    <form encType="multipart/form-data" onSubmit={handleSubmit}>
      <Card className=" ">
        <CardHeader>
          <h1 className="text-xl font-bold">Upload</h1>
        </CardHeader>
        <CardContent className=" ">
          <div className="">
            <Label htmlFor="kyThiId" className="mb-2">
              Chọn kỳ thi:{" "}
            </Label>
            <Select name="kyThiId">
              <SelectTrigger name="kyThiId" id="kyThiId" className="w-full">
                <SelectValue placeholder="Chọn" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {listKyThi.map((item) => {
                    return (
                      <SelectItem key={item.id} value={String(item.id)}>
                        {item.ten}
                      </SelectItem>
                    );
                  })}
                </SelectGroup>
              </SelectContent>
            </Select>{" "}
          </div>{" "}
          <div className="mt-4 grid w-full max-w-sm items-center gap-2">
            <Label htmlFor="file">tai file excel</Label>
            <Input id="file" name="file" type="file" />
          </div>
          <div className="mt-4">
            <Button disabled={isPending} type="submit" className=" ">
              Upload
            </Button>
          </div>
          {actionState.errors.message ? (
            <div className="text-red-400">{actionState.errors.message}</div>
          ) : null}
          {actionState.success ? (
            <div className="text-green-400">{actionState.success}</div>
          ) : null}
          {actionState.data.length > 0 && ""}
        </CardContent>
      </Card>
    </form>
  );
}
