enum Lang
{
  EN = "EN",
  ES = "ES"
};

/**
 * Get enum value base on their respective value
 * @param  {any} data Enum collection
 * @param  {string} val Enum value
 * @param  {any} def Default response (item)
 */

const getEnum = (data: any, val: string, def: any) =>
{
  if (val) val = val.toUpperCase();
  for (let d in data)
    if (data[d].toUpperCase() == val)
      return d;
  return def;
}

enum MType
{
  LEAGUE = "LEAGUE",
  CUP = "CUP",
  FRIENDLY = "FRIENDLY"
}

export { Lang, getEnum, MType }