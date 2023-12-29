import { Speaker } from '../models/speaker.model';

// @ts-ignore
const speakerMap: Record<string, Speaker> = {
  'nikola-dexter-pernutaj': {
    id: 'nikola-dexter-pernutaj',
    name: 'Nikola Dexter Pernutaj',
    headline: 'engineer and tinkerer at heart',
    bio: "Nikola Pertunaj is a highly accomplished engineer and tinkerer with a passion for technology and innovation. Born in Belgrade, Serbia in 1993, Nikola comes from a Mechanical Engineer father who instilled in him a love for the field at a young age. Throughout his childhood, Nikola was always fascinated by taking things apart and putting them back together, fuelling his curiosity and creativity. He has spent his life gathering skills that allow him to take what's in his brain and make it real.",
    talkTitle: 'Opening Keynote: TBD',
    talkDescription: '',
    photoUrl: '/people/nikola-dexter-pernutaj.png',
    // bannerUrl:
    //   'https://gasolina.shop/banners/nikola-dexter-pernutaj.png',
    // twitterUrl: 'https://twitter.com/mgechev/',
    // linkedinUrl: 'https://www.linkedin.com/in/mgechev/',
    // githubUrl: 'https://github.com/mgechev/',
  },
  'alojz-kirn': {
    id: 'alojz-kirn',
    name: 'Alojz Kirn',
    headline:
      'versatile professional with a unique background and a passion for innovation',
    bio: 'Meet Alojz, a highly skilled and versatile professional with a unique background and a passion for innovation. Born in Belgrade in 1988, Alojz grew up spending most of his time in his father\'s workshop. His father, an Aerospace Engineer, sparked his early interest in technology and engineering. His mother, a professional chef and a talented painter, ingrained in him a strong sense of creativity and artistic vision.',
    talkTitle: 'Talk: TBD',
    talkDescription: '',
    photoUrl: '/people/alojz-kirn.png',
    // bannerUrl:
    //   'https://gasolina.shop/banners/ng-belgrade-conf-2024-alex-okrushko.jpg',
    // twitterUrl: 'https://twitter.com/AlexOkrushko/',
    // linkedinUrl: 'https://linkedin.com/in/alex-okrushko-64262a33/',
    // githubUrl: 'https://github.com/alex-okrushko/',
  },
  'milos-rujevic': {
    id: 'milos-rujevic',
    name: 'Milos Rujevic',
    headline: 'Mad Scientist',
    bio: 'Not much is known about Milos. He is a mad scientist who likes to tinker with things.',
    talkTitle: 'Talk: TBD',
    talkDescription: '',
    photoUrl: '/people/milos-rujevic.png',
    // twitterUrl: 'https://twitter.com/FabianGosebrink/',
    // linkedinUrl: 'https://www.linkedin.com/in/fabian-gosebrink-71023a88/',
    // githubUrl: 'https://github.com/FabianGosebrink/',
  },
};

export const speakersResource = {
  getSpeakers: () => Object.values(speakerMap),
  getSpeakerById: (id: string) => speakerMap[id],
} as const;
