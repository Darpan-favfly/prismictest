// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type HomePageDocumentDataSlicesSlice = HeroSlice;

/**
 * Content for Home Page documents
 */
interface HomePageDocumentData {
  /**
   * Heading field in *Home Page*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: home_page.heading
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  heading: prismic.RichTextField;

  /**
   * Slice Zone field in *Home Page*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: home_page.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<HomePageDocumentDataSlicesSlice>
  /**
   * Meta Description field in *Home Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: home_page.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Home Page*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: home_page.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *Home Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: home_page.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * Home Page document from Prismic
 *
 * - **API ID**: `home_page`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomePageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<HomePageDocumentData>,
    "home_page",
    Lang
  >;

type LayoutDocumentDataSlices1Slice = MenuItemSlice;

/**
 * Content for Layout documents
 */
interface LayoutDocumentData {
  /**
   * Logo field in *Layout*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: layout.logo
   * - **Tab**: Header
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  logo: prismic.ImageField<never>;

  /**
   * CTA label field in *Layout*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: layout.cta_label
   * - **Tab**: Header
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  cta_label: prismic.RichTextField;

  /**
   * CTA link field in *Layout*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: layout.cta_link
   * - **Tab**: Header
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  cta_link: prismic.LinkField;

  /**
   * Slice Zone field in *Layout*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: layout.slices1[]
   * - **Tab**: Header
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices1: prismic.SliceZone<LayoutDocumentDataSlices1Slice>;
}

/**
 * Layout document from Prismic
 *
 * - **API ID**: `layout`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type LayoutDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<LayoutDocumentData>,
    "layout",
    Lang
  >;

type SubMenuDocumentDataSlicesSlice = SubMenuItemSlice;

/**
 * Content for Sub menu documents
 */
interface SubMenuDocumentData {
  /**
   * Slice Zone field in *Sub menu*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: sub_menu.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<SubMenuDocumentDataSlicesSlice>;
}

/**
 * Sub menu document from Prismic
 *
 * - **API ID**: `sub_menu`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type SubMenuDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<SubMenuDocumentData>,
    "sub_menu",
    Lang
  >;

export type AllDocumentTypes =
  | HomePageDocument
  | LayoutDocument
  | SubMenuDocument;

/**
 * Primary content in *Hero → Primary*
 */
export interface HeroSliceDefaultPrimary {
  /**
   * Heading field in *Hero → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  heading: prismic.RichTextField;

  /**
   * Description field in *Hero → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;

  /**
   * label field in *Hero → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.label
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  label: prismic.RichTextField;

  /**
   * Link field in *Hero → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;
}

/**
 * Primary content in *Hero → Items*
 */
export interface HeroSliceDefaultItem {
  /**
   * Background Image field in *Hero → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.items[].background_image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  background_image: prismic.ImageField<never>;
}

/**
 * Default variation for Hero Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<HeroSliceDefaultPrimary>,
  Simplify<HeroSliceDefaultItem>
>;

/**
 * Primary content in *Hero → Primary*
 */
export interface HeroSliceHerov2Primary {
  /**
   * Heading field in *Hero → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  heading: prismic.RichTextField;

  /**
   * Description field in *Hero → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;
}

/**
 * Herov2 variation for Hero Slice
 *
 * - **API ID**: `herov2`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSliceHerov2 = prismic.SharedSliceVariation<
  "herov2",
  Simplify<HeroSliceHerov2Primary>,
  never
>;

/**
 * Slice variation for *Hero*
 */
type HeroSliceVariation = HeroSliceDefault | HeroSliceHerov2;

/**
 * Hero Shared Slice
 *
 * - **API ID**: `hero`
 * - **Description**: Hero
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSlice = prismic.SharedSlice<"hero", HeroSliceVariation>;

/**
 * Primary content in *MenuItem → Primary*
 */
export interface MenuItemSliceDefaultPrimary {
  /**
   * Label field in *MenuItem → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: menu_item.primary.label
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  label: prismic.RichTextField;

  /**
   * Link field in *MenuItem → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: menu_item.primary.link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;
}

/**
 * Default variation for MenuItem Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type MenuItemSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<MenuItemSliceDefaultPrimary>,
  never
>;

/**
 * Primary content in *MenuItem → Primary*
 */
export interface MenuItemSliceWithSubMenuPrimary {
  /**
   * Label field in *MenuItem → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: menu_item.primary.label
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  label: prismic.RichTextField;

  /**
   * Submenu field in *MenuItem → Primary*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: menu_item.primary.submenu
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  submenu: prismic.ContentRelationshipField<"sub_menu">;
}

/**
 * With sub menu variation for MenuItem Slice
 *
 * - **API ID**: `withSubMenu`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type MenuItemSliceWithSubMenu = prismic.SharedSliceVariation<
  "withSubMenu",
  Simplify<MenuItemSliceWithSubMenuPrimary>,
  never
>;

/**
 * Slice variation for *MenuItem*
 */
type MenuItemSliceVariation = MenuItemSliceDefault | MenuItemSliceWithSubMenu;

/**
 * MenuItem Shared Slice
 *
 * - **API ID**: `menu_item`
 * - **Description**: MenuItem
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type MenuItemSlice = prismic.SharedSlice<
  "menu_item",
  MenuItemSliceVariation
>;

/**
 * Primary content in *SubMenuItem → Primary*
 */
export interface SubMenuItemSliceDefaultPrimary {
  /**
   * Label field in *SubMenuItem → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: sub_menu_item.primary.label
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  label: prismic.RichTextField;

  /**
   * Link field in *SubMenuItem → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: sub_menu_item.primary.link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;
}

/**
 * Default variation for SubMenuItem Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type SubMenuItemSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<SubMenuItemSliceDefaultPrimary>,
  never
>;

/**
 * Primary content in *SubMenuItem → Primary*
 */
export interface SubMenuItemSliceNavMenuPrimary {
  /**
   * Label field in *SubMenuItem → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: sub_menu_item.primary.label
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  label: prismic.RichTextField;

  /**
   * Link field in *SubMenuItem → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: sub_menu_item.primary.link
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  link: prismic.RichTextField;
}

/**
 * NavMenu variation for SubMenuItem Slice
 *
 * - **API ID**: `navMenu`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type SubMenuItemSliceNavMenu = prismic.SharedSliceVariation<
  "navMenu",
  Simplify<SubMenuItemSliceNavMenuPrimary>,
  never
>;

/**
 * Slice variation for *SubMenuItem*
 */
type SubMenuItemSliceVariation =
  | SubMenuItemSliceDefault
  | SubMenuItemSliceNavMenu;

/**
 * SubMenuItem Shared Slice
 *
 * - **API ID**: `sub_menu_item`
 * - **Description**: SubMenuItem
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type SubMenuItemSlice = prismic.SharedSlice<
  "sub_menu_item",
  SubMenuItemSliceVariation
>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig
    ): prismic.Client<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      HomePageDocument,
      HomePageDocumentData,
      HomePageDocumentDataSlicesSlice,
      LayoutDocument,
      LayoutDocumentData,
      LayoutDocumentDataSlices1Slice,
      SubMenuDocument,
      SubMenuDocumentData,
      SubMenuDocumentDataSlicesSlice,
      AllDocumentTypes,
      HeroSlice,
      HeroSliceDefaultPrimary,
      HeroSliceDefaultItem,
      HeroSliceHerov2Primary,
      HeroSliceVariation,
      HeroSliceDefault,
      HeroSliceHerov2,
      MenuItemSlice,
      MenuItemSliceDefaultPrimary,
      MenuItemSliceWithSubMenuPrimary,
      MenuItemSliceVariation,
      MenuItemSliceDefault,
      MenuItemSliceWithSubMenu,
      SubMenuItemSlice,
      SubMenuItemSliceDefaultPrimary,
      SubMenuItemSliceNavMenuPrimary,
      SubMenuItemSliceVariation,
      SubMenuItemSliceDefault,
      SubMenuItemSliceNavMenu,
    };
  }
}
