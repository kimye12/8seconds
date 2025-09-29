import supabase from "../supabaseClient";

export async function fetchMainProducts({ address }) {
  const { data, error } = await supabase.from(`${address}`).select("*");

  if (error) {
    throw new Error(`${address}의 상품정보 불러오기를 실패했습니다.`);
  }

  return data;
}

export async function fetchPageProducts({ gender, code }) {
  const { data, error } = await supabase
    .from(`${gender}products`)
    .select("*")
    .ilike("category", `${code}%`);

  if (error) {
    throw new Error(`${gender}상품정보 불러오기를 실패했습니다. `);
  }

  return data;
}

export async function fetchPageCode({ code }) {
  const { data, error } = await supabase
    .from("codebox")
    .select("*")
    .eq("code", code)
    .single();

  if (error) {
    throw new Error(`${code}페이지정보 불러오기를 실패했습니다. `);
  }

  return data;
}
