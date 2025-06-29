"use client";
import type { KyThi } from "@prisma/client";

import { ClipLoader } from "react-spinners";

import { useState } from "react";
import DanhSachDuThi from "~/components/DanhSachDuThi";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { getKetQuaThi2 } from "~/server/actions/khoahoc.actions";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";

export const formSchemaSearchKetQua = z.object({
  sbd: z.string().min(1, "Ban chua nhap so bao danh"),
  examId: z.string().min(1, "Ban chua chon ky thi"),
});

export default function FormTraCuuDiemThi({
  listKyThi,
}: {
  listKyThi: KyThi[];
}) {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const form = useForm<z.infer<typeof formSchemaSearchKetQua>>({
    resolver: zodResolver(formSchemaSearchKetQua),
    defaultValues: {
      sbd: "ANHVB037",
      examId: "",
    },
  });
  async function onSubmit(values: z.infer<typeof formSchemaSearchKetQua>) {
    setError("");
    setData([]);
    const res = await getKetQuaThi2(values);
    if (!res.success) {
      setError(res.message);
    }
    setData(res.data || []);
  }

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="examId"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Chon ky thi</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Chọn" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {listKyThi.map((item) => {
                      return (
                        <SelectItem key={item.id} value={String(item.id)}>
                          {item.ten}
                        </SelectItem>
                      );
                    })}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="sbd"
            render={({ field }) => (
              <FormItem>
                <FormLabel>So Bao Danh</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button disabled={form.formState.isSubmitting} type="submit">
            Tra cuu
          </Button>
        </form>
      </Form>
      <ClipLoader
        loading={form.formState.isSubmitting}
        size={50}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      {error && <div className="text-red-400">{error}</div>}

      {data.length > 0 && (
        <DanhSachDuThi applications={data || []} caption={""} />
      )}
    </>
  );
}
