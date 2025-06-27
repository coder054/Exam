"use client";
import type { KyThi } from "@prisma/client";
import { startTransition, useActionState } from "react";
import DanhSachDuThi from "~/components/DanhSachDuThi";
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
import { getKetQuaThi } from "~/server/actions/khoahoc.actions";

export default function FormTraCuuDiemThi({
  listKyThi,
}: {
  listKyThi: KyThi[];
}) {
  const [actionState, action, isPending] = useActionState(getKetQuaThi, {
    errors: { message: "" },
    data: [],
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
    <form onSubmit={handleSubmit}>
      <Card className=" ">
        <CardHeader>
          <h1 className="text-xl font-bold">Tra cuu diem thi</h1>
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
          <div className="mt-4">
            <Label htmlFor="sbd" className="mb-2">
              nhap so bao danh:{" "}
            </Label>

            <Input defaultValue={"ANHVB037"} name="sbd" id="sbd" type="text" />
          </div>{" "}
          <div className="mt-4">
            <Button disabled={isPending} type="submit" className=" ">
              Tra cuu
            </Button>
          </div>
          {actionState.errors.message ? (
            <div className="text-red-400">{actionState.errors.message}</div>
          ) : null}
          {actionState.data.length > 0 && (
            <DanhSachDuThi applications={actionState.data || []} caption={""} />
          )}
        </CardContent>
      </Card>
    </form>
  );
}
