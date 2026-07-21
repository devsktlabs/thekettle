// Pure CSS marquee; no client JS required.

const PHOTOS = [
  {
    id: "1c1de9_34b3f895cdea49d28f94ab5823eee5c3~mv2.jpg",
    alt: "Inside The Brewer's Kettle",
  },
  {
    id: "1c1de9_b10f756ea55d41a38bcfb2b8234d599a~mv2.jpg",
    alt: "Brewer's Kettle atmosphere",
  },
  {
    id: "1c1de9_12910ee6de824de69afddb454a541124~mv2.jpg",
    alt: "Brewer's Kettle crowd",
  },
  {
    id: "1c1de9_f81e0b893e6a4cda95bcf9e925f0ff0c~mv2.jpg",
    alt: "Brewer's Kettle bar",
  },
  {
    id: "1c1de9_58b8b7dff4f445829e428f8986b4e32e~mv2.jpg",
    alt: "Brewer's Kettle games area",
  },
  {
    id: "1c1de9_6984bae1170345768016379e1218524a~mv2.jpg",
    alt: "Brewer's Kettle event space",
  },
  {
    id: "1c1de9_d1c23290a9764731afc4c1af4a71c76a~mv2.jpg",
    alt: "Brewer's Kettle vibe",
  },
  {
    id: "1c1de9_52ed1000b83342c1ba23618c240614b3~mv2.webp",
    alt: "Brewer's Kettle community",
  },
];

function photoUrl(id: string) {
  return `https://static.wixstatic.com/media/${id}`;
}

export default function PhotoMarquee() {
  const doubled = [...PHOTOS, ...PHOTOS];

  return (
    <section className="py-10 overflow-hidden bg-bg">
      {/* Track duplicated for seamless loop */}
      <div className="flex gap-3 marquee-track w-max">
        {doubled.map((photo, index) => (
          <div
            key={`${photo.id}-${index}`}
            className="relative w-[300px] md:w-[360px] h-[200px] md:h-[240px] shrink-0 rounded-2xl overflow-hidden ring-1 ring-white/[0.06]"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={photoUrl(photo.id)}
              alt={index < PHOTOS.length ? photo.alt : ""}
              width={360}
              height={240}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
