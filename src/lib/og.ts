type OpenGraphType = {
  siteName: string;
  description: string;
  templateTitle?: string;
  logo?: string;
};

export function openGraph({
  siteName,
  templateTitle,
  description,
  logo = 'https://ik.imagekit.io/webbuilder/satyricon/og__invzwcR1.jpg?updatedAt=1715719927881',
}: OpenGraphType): string {
  // eslint-disable-next-line no-console
  console.log('logo', siteName, templateTitle, description, logo);

  // const ogLogo = encodeURIComponent(logo);
  // const ogSiteName = encodeURIComponent(siteName.trim());
  // const ogTemplateTitle = templateTitle
  //   ? encodeURIComponent(templateTitle.trim())
  //   : undefined;
  // const ogDesc = encodeURIComponent(description.trim());

  return 'https://ik.imagekit.io/webbuilder/satyricon/Prew%20png_NinrID5sX.png?updatedAt=1715793538999';
}
