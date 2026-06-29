import { permanentRedirect } from "next/navigation";

type ValidateRedirectProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export default async function ValidateRedirect({
  searchParams,
}: ValidateRedirectProps) {
  const params = new URLSearchParams();
  const currentSearchParams = await searchParams;

  Object.entries(currentSearchParams).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach((item) => params.append(key, item));
      return;
    }

    if (value) {
      params.set(key, value);
    }
  });

  const query = params.toString();

  permanentRedirect(`/experiments/fresh-eyes${query ? `?${query}` : ""}`);
}
