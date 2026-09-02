export const SITE = {
  title: 'TB–000 / Tyson Barnes',
  name: 'Tyson Barnes',
  description: 'Engineering the physical & digital world. Systems, technical writing, photography and applied engineering.',
  url: 'https://tysonbarnes.co.uk',
  github: 'https://github.com/Neclonesoul',
  email: 'mailto:tyson@darktech.co.za',
  location: 'South Africa / United Kingdom',
  socials: {
    x: 'https://x.com/tysonbarnes',
    youtube: 'https://www.youtube.com/@TysonBarnesOfficial',
    instagram: 'https://www.instagram.com/barnestd2169/',
    flickr: 'https://www.flickr.com/photos/tysonbarnes/',
    flickrProfile: 'https://www.flickr.com/people/tysonbarnes/'
  }
} as const;

export const primaryNav = [
{ label: 'NOTES', href: '/notes/' },
  { label: 'SYSTEMS', href: '/systems/' },
  { label: 'PHOTOGRAPHY', href: '/photography/' },
  { label: 'ABOUT', href: '/about/' }
] as const;

export function canonical(pathname: string) {
  return new URL(pathname, SITE.url).toString();
}
