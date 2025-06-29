"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "~/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import { ROUTES } from "~/constants";
import { toastt } from "~/lib/utils";
import { createKhoaHoc } from "~/server/actions/khoahoc.actions";

export const formSchemaAddKhoaHoc = z.object({
  ten: z.string().min(2).max(50),
  khoaTuyenSinh: z.string().min(2).max(50),
  namTuyenSinh: z.string().min(2).max(50),
  mota: z.string().min(2).max(50),
  slug: z.string().min(2),
});

export default function FormAddKhoaHoc() {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchemaAddKhoaHoc>>({
    resolver: zodResolver(formSchemaAddKhoaHoc),
    defaultValues: {
      ten: "",
      khoaTuyenSinh: "",
      namTuyenSinh: "",
      mota: "",
      slug: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchemaAddKhoaHoc>) {
    console.log("aaa values", values);
    const res = await createKhoaHoc(values);

    toastt(res);
    if (res.redirectTo) {
      router.push(res.redirectTo);
    }
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="ten"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Ten ky thi</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="khoaTuyenSinh"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Khoa tuyen sinh</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="namTuyenSinh"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nam tuyen sinh</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="mota"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Mo ta</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="slug"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Slug (url)</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex gap-x-2">
          <Button asChild variant={"destructive"} type="button">
            <Link className=" " href={ROUTES.admin.listKhoaHoc}>
              Tro ve
            </Link>
          </Button>
          <Button disabled={form.formState.isSubmitting} type="submit">
            Luu
          </Button>
        </div>
      </form>
    </Form>
  );
}
///
