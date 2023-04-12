import { v4 as uuid } from "uuid";
import { LocationType } from "../components/card";
import { ActionCard, CardType, RuleCard } from "../components/card/types";

const actionCards: ActionCard[] = [
  {
    id: uuid(),
    type: CardType.ACTION,
    title: "Ententanz",
    description:
      "Tanze den Ententanz und alle anderen Spieler müssen mitmachen.",
    location: [
      LocationType.RESTAURANT,
      LocationType.HOME,
      LocationType.OUTDOOR,
    ],
    difficulty: 1,
    consequence: "Wer nicht mitmacht oder einen Fehler macht, muss trinken.",
  },
  {
    id: uuid(),
    type: CardType.ACTION,
    title: "Wortkette",
    description:
      "Der Spieler sagt ein Wort, der nächste Spieler muss ein neues Wort sagen, welches mit dem letzten Buchstaben des vorherigen Wortes beginnt. ",
    location: [
      LocationType.RESTAURANT,
      LocationType.HOME,
      LocationType.OUTDOOR,
    ],
    difficulty: 1,
    consequence:
      "Wer keinen passenden Begriff mehr weiß oder ein bereits genanntes Wort wiederholt, muss trinken.",
  },
  {
    id: uuid(),
    type: CardType.ACTION,
    title: "Restaurant-Trivia",
    description: "Jeder muss sein Wissen über das Restaurant beweisen.",
    location: [LocationType.RESTAURANT],
    difficulty: 1,
    consequence: "Wer nichts mehr weis muss trinken.",
  },
  {
    id: uuid(),
    type: CardType.ACTION,
    title: "Platztausch",
    description: "Entscheide mit wem du Platztauschen möchtest",
    location: [LocationType.RESTAURANT],
    difficulty: 1,
    consequence: "Keiner muss trinken",
  },
  {
    id: uuid(),
    type: CardType.ACTION,
    title: "Restaurant-Lotterie",
    description:
      "Jeder Spieler muss eine Zahl zwischen 1 und 10 wählen. Der Kellner / die Kellnerin wird dann um eine Zahl zwischen 1 und 10 gebeten. ",
    location: [LocationType.RESTAURANT],
    difficulty: 1,
    consequence:
      "Wenn die Zahl des Spielers mit der des Kellners / der Kellnerin übereinstimmt, darf der Spieler jemanden zum Trinken auffordern.",
  },
  {
    id: uuid(),
    type: CardType.ACTION,
    title: "Speisekarten-Pantomime",
    description:
      "Ein Spieler muss ein Gericht oder Getränk aus der Speisekarte pantomimisch darstellen, ohne das Wort auszusprechen.",
    location: [LocationType.RESTAURANT],
    difficulty: 1,
    consequence:
      "Wenn die anderen Spieler es erraten können, dürfen sie jemanden zum Trinken auffordern. Wenn niemand es errät, muss der Spieler trinken.",
  },
  {
    id: uuid(),
    type: CardType.ACTION,
    title: "Tiere im Zoo",
    description:
      "Jeder Spieler muss ein Tier imitieren, das er gerne im Zoo sehen würde.",
    location: [
      LocationType.RESTAURANT,
      LocationType.HOME,
      LocationType.OUTDOOR,
    ],
    difficulty: 1,
    consequence: "Wer am schlechtesten abschneidet, muss trinken.",
  },
  {
    id: uuid(),
    type: CardType.ACTION,
    title: "Fernbedienung",
    description:
      "Du bist die Fernbedienung für einen Mitspieler. Du bestimmst, was der Mitspieler machen oder sagen muss.",
    location: [
      LocationType.RESTAURANT,
      LocationType.HOME,
      LocationType.OUTDOOR,
    ],
    difficulty: 1,
    consequence: "Wenn der Mitspieler nicht gehorcht, muss er trinken.",
  },
  {
    id: uuid(),
    type: CardType.ACTION,
    title: "Flaschendrehen",
    description:
      "Definiere eine Aufgabe. Dann, drehe eine Flasche und der Spieler, auf den sie zeigt, muss die Aufgabe erfüllen.",
    location: [LocationType.HOME],
    difficulty: 1,
    consequence: "Macht er es nicht, muss er trinken",
  },
  {
    id: uuid(),
    type: CardType.ACTION,
    title: "Zungenbrecher",
    description:
      "Jemand sagt einen Zungenbrecher und jeder muss ihn wiederholen.",
    location: [
      LocationType.RESTAURANT,
      LocationType.HOME,
      LocationType.OUTDOOR,
    ],
    difficulty: 1,
    consequence: "Wer ihn falsch sagt, muss trinken.",
  },
  {
    id: uuid(),
    type: CardType.ACTION,
    title: "Bezahle",
    description: "Bezahle die Rechnung",
    location: [
      LocationType.RESTAURANT,
      LocationType.HOME,
      LocationType.OUTDOOR,
    ],
    difficulty: 1,
    consequence: "Wenn nicht dann exe dein Glas",
  },
  {
    id: uuid(),
    type: CardType.ACTION,
    title: "Zwei Wahrheiten und eine Lüge",
    description:
      "Der Spieler sagt drei Aussagen über sich selbst, zwei davon sind wahr und eine ist gelogen. Die anderen Spieler müssen erraten, welche Aussage gelogen ist.",
    location: [
      LocationType.RESTAURANT,
      LocationType.HOME,
      LocationType.OUTDOOR,
    ],
    difficulty: 1,
    consequence: " Wer falsch rät, muss trinken.",
  },
  {
    id: uuid(),
    type: CardType.ACTION,
    title: "Wahrheit oder Pflicht",
    description:
      'Wähle einen Mitspieler aus und fordere ihn auf, "Wahrheit oder Pflicht" zu spielen. Wenn er sich für "Wahrheit" entscheidet, muss er eine unangenehme Frage beantworten. Wenn er sich für "Pflicht" entscheidet, muss er eine peinliche Aufgabe erfüllen.',
    location: [
      LocationType.RESTAURANT,
      LocationType.HOME,
      LocationType.OUTDOOR,
    ],
    difficulty: 1,
    consequence: "Wenn er ablehnt, muss er trinken.",
  },
];

//Für Alle
const ruleCards: RuleCard[] = [
  {
    id: uuid(),
    type: CardType.RULE,
    title: "T-Rex",
    description:
      "Alle Spieler müssen ihre Arme wie ein T-Rex halten, bis zum Ende der Runde.",
    consequence: "Wer seine Arme bewegt, muss trinken.",
    location: [
      LocationType.RESTAURANT,
      LocationType.HOME,
      LocationType.OUTDOOR,
    ],
    difficulty: 1,
  },
  {
    id: uuid(),
    type: CardType.RULE,
    title: "Fee auf dem Glas",
    description:
      "Jeder Spieler muss vor jedem Schluck, die Fee, die auf dem Glasrand sitzt, herunternehmen, dann trinken und dann wieder auf das Glas setzen.",
    consequence: "Wer es vergisst, muss trinken.",
    location: [
      LocationType.RESTAURANT,
      LocationType.HOME,
      LocationType.OUTDOOR,
    ],
    difficulty: 1,
  },
  {
    id: uuid(),
    type: CardType.RULE,
    title: "Finger auf die Lippen",
    description:
      "Jeder Spieler muss seinen Finger auf die Lippen legen und ihn dort halten, bis zum Ende der Runde.",
    consequence: "Wer seinen Finger bewegt oder abnimmt, muss trinken.",
    location: [
      LocationType.RESTAURANT,
      LocationType.HOME,
      LocationType.OUTDOOR,
    ],
    difficulty: 1,
  },
  {
    id: uuid(),
    type: CardType.RULE,
    title: "Nasenmeister",
    description:
      'Derjenige, der diese Karte zieht, ist fortan der "Nasenmeister". Jedes Mal, wenn er seinen Zeigefinger auf die Nase legt, müssen alle anderen Spieler es ihm nachmachen. ',
    consequence: "Wer es nicht rechtzeitig schafft, muss trinken.",
    location: [
      LocationType.RESTAURANT,
      LocationType.HOME,
      LocationType.OUTDOOR,
    ],
    difficulty: 1,
  },
  {
    id: uuid(),
    type: CardType.RULE,
    title: "Namensrunde",
    description:
      'Jeder sagt seinen Namen und ein Adjektiv, das mit demselben Buchstaben beginnt wie sein Name (z. B. "Lustiger Lukas").',
    consequence: "Wer es vergisst, muss trinken.",
    location: [
      LocationType.RESTAURANT,
      LocationType.HOME,
      LocationType.OUTDOOR,
    ],
    difficulty: 1,
  },
  {
    id: uuid(),
    type: CardType.RULE,
    title: "Kategorien",
    description:
      "Jemand nennt eine Kategorie (z. B. Marken von Schokolade) und jeder muss abwechselnd etwas in dieser Kategorie nennen.",
    consequence: "Wem nichts mehr einfällt, muss trinken.",
    location: [
      LocationType.RESTAURANT,
      LocationType.HOME,
      LocationType.OUTDOOR,
    ],
    difficulty: 1,
  },
  {
    id: uuid(),
    type: CardType.RULE,
    title: "Augenkontakt",
    description: "Kein Augenkontakt mehr, für eine Runde",
    consequence:
      "Wer jemandem in die Augen schaut und derjenige schaut zurück, muss trinken.",
    location: [
      LocationType.RESTAURANT,
      LocationType.HOME,
      LocationType.OUTDOOR,
    ],
    difficulty: 1,
  },
  {
    id: uuid(),
    type: CardType.RULE,
    title: "Verbotene Wörter",
    description:
      "Jemand gibt ein Wort vor, das niemand während des Spiels sagen darf.",
    consequence: "Wer es dennoch sagt, muss trinken.",
    location: [
      LocationType.RESTAURANT,
      LocationType.HOME,
      LocationType.OUTDOOR,
    ],
    difficulty: 1,
  },
  {
    id: uuid(),
    type: CardType.RULE,
    title: "Ich hab noch nie",
    description: "Jeder sagt etwas, das er/sie noch nie getan hat.",
    consequence: "Wer das schon mal getan hat, muss trinken.",
    location: [
      LocationType.RESTAURANT,
      LocationType.HOME,
      LocationType.OUTDOOR,
    ],
    difficulty: 1,
  },
  {
    id: uuid(),
    type: CardType.RULE,
    title: "Best Friends",
    description: "Wähle einen anderen Spieler als deinen besten Freund aus. ",
    consequence:
      "Jedes Mal, wenn du trinkst, muss dein bester Freund auch trinken.",
    location: [
      LocationType.RESTAURANT,
      LocationType.HOME,
      LocationType.OUTDOOR,
    ],
    difficulty: 1,
  },
  {
    id: uuid(),
    type: CardType.RULE,
    title: "Schnick-Schnack-Schnuck",
    description: "Die klassische Schere-Stein-Papier-Variante mit einem Twist",
    consequence: "Wer verliert, muss trinken.",
    location: [
      LocationType.RESTAURANT,
      LocationType.HOME,
      LocationType.OUTDOOR,
    ],
    difficulty: 1,
  },
  {
    id: uuid(),
    type: CardType.RULE,
    title: "Reimspiel",
    description:
      "Ein Spieler nennt ein Wort, auf das nun der Reihe nach gereimt wird. ",
    consequence:
      "Wer innerhalb von 10 Sekunden keinen neuen Reim mehr weiß, einen Fehler macht oder ein Wort wiederholt, muss trinken",
    location: [
      LocationType.RESTAURANT,
      LocationType.HOME,
      LocationType.OUTDOOR,
    ],
    difficulty: 1,
  },
];

export const allCards = [...ruleCards, ...actionCards];
