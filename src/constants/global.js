import {
  LINK_BLOG,
  LINK_HOME,
  LINK_ABOUT,
  LINK_CONTACT,
  LINK_PRODUCT,
} from "./../constants/utils";

export const HEADER = [
  {
    url: { LINK_HOME },
    name: "Home",
  },
  {
    url: { LINK_ABOUT },
    name: "About",
  },
  {
    url: { LINK_CONTACT },
    name: "Contact",
  },
  {
    url: { LINK_PRODUCT },
    name: "Product",
  },
  {
    url: { LINK_BLOG },
    name: "Blog",
  },
];

export const SOCIAL = [
  {
    url: "https://www.facebook.com/",
    icon: "fab fa-facebook",
    name: "Facebook",
  },
  {
    url: "https://www.instagram.com/",
    icon: "fab fa-instagram",
    name: "Instagram",
  },
  {
    url: "https://www.twitter.com/",
    icon: "fab fa-twitter",
    name: "Twitter",
  },
  {
    url: "https://www.youtube.com/",
    icon: "fab fa-youtube",
    name: "Youtube",
  },
];
