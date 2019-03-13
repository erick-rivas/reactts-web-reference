import { Lang, getEnum } from "models/util/Const";

/**
 * Representation of a basic tuple (key, value).
 */

class Pair
{
  key: string;
  value: any;

  constructor(key: string, value: any)
  {
    this.key = key;
    this.value = value;
  }
}

/**
 * Representation of string class with lang support.
 */

class LString
{
  static getLang = (val: string): Lang => getEnum(Lang, val, Lang.EN);

  lang: Lang;
  val: string;

  constructor(lang: Lang, val: string)
  {
    this.lang = lang;
    this.val = val;
  }
}


export { Pair, LString };
