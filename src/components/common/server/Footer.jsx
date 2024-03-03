import { Separator } from '@/components/ui/server';
import Link from 'next/link';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const addresses = [
    {
      city: 'Los Angeles',
      address: '145 Oliveshka Street, Los Angeles, LA 90003',
      phone: '+44 987 065 901',
      email: 'info@example.com',
    },
    {
      city: 'San Francisco',
      address: `210 Pier Street, San Francisco, CA 94111`,
      phone: '+44 987 065 902',
      email: 'info2@Example.com',
    },
    {
      city: 'New York',
      address: '711 Snow Street, New York, NY 10014',
      phone: '+44 987 065 903',
      email: 'info3@example.com',
    },
  ];

  const socialMedia = [
    {
      label: 'Facebook',
      title: 'Follow us on Facebook',
      url: 'https://facebook.com/',
    },
    {
      label: 'Instagram',
      title: 'Follow us on Instagram',
      url: 'https://instagram.com/pixellab',
    },
    {
      label: 'Dribbble',
      title: 'Follow us on Dribbble',
      url: 'https://dribbble.com/',
    },
    {
      label: 'Pinterest',
      title: 'Follow us on Pinterest',
      url: 'https://www.pinterest.com/',
    },
    {
      label: 'LinkedIn',
      title: 'Follow us on LinkedIn',
      url: 'https://www.linkedin.com/in/cuculici-iulian-512649155/',
    },
    {
      label: 'X',
      title: 'Follow us on X',
      url: 'https://twitter.com/',
    },
    {
      label: 'Behance',
      title: 'Follow us on Behance',
      url: 'https://www.behance.net/',
    },
  ];

  const chunkSize = 2;
  const socialMediaChunks = [];
  for (let i = 0; i < socialMedia.length; i += chunkSize) {
    socialMediaChunks.push(socialMedia.slice(i, i + chunkSize));
  }

  return (
    <>
      <section className="grid justify-items-center lg:justify-items-center gap-x-3 gap-y-10 grid-cols-2 grid-rows-auto lg:grid-cols-4 px-4 py-12">
        {addresses.map((address, index) => (
          <div key={index} className="flex flex-col gap-2">
            <h2 className="uppercase text-black font-bold text-center lg:text-left">
              {address.city}
            </h2>
            <ul className="flex flex-col items-start justify-center lg:justify-start gap-3 lg:gap-5 text-black">
              {address.address.split(',')[0]},
              <br />
              {address.address.split(',').slice(1).join(',')}
              <Link href={`tel:${address.phone}`}>
                <li className="transition-colors hover:text-amber-600">
                  {address.phone}
                </li>
              </Link>
              <Link href={`mailto:${address.email}`}>
                <li className="transition-colors hover:text-amber-600">
                  {address.email}
                </li>
              </Link>
            </ul>
          </div>
        ))}

        <div className="flex flex-col gap-2">
          <h2 className="uppercase text-black font-bold text-center lg:text-left">
            Follow Us
          </h2>
          {socialMediaChunks.map((chunk, index) => (
            <ul
              key={index}
              className="text-black grid gap-x-3 lg:gap-x-10 gap-y-2 grid-cols-2 grid-rows-auto"
            >
              {chunk.map((social, idx) => (
                <Link key={idx} target="_blank" href={social.url}>
                  <li
                    className="transition-colors hover:text-amber-600"
                    title={social.title}
                  >
                    {social.label}
                  </li>
                </Link>
              ))}
            </ul>
          ))}
        </div>
      </section>

      <Separator></Separator>

      <section className="container mx-auto px-4 text-center text-black pt-8">
        &copy; 2023 - {currentYear}. Created by{' '}
        <Link
          className="transition-colors hover:text-amber-600 hover:font-bold"
          target="_blank"
          href="https://www.linkedin.com/in/cuculici-iulian-512649155/"
        >
          Cuculici Iulian
        </Link>
      </section>
    </>
  );
};
