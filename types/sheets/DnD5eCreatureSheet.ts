import { z } from "zod";
import { Builder } from 'builder-pattern'

const DnD5eAlignment = [
    "lawful_good",
    "lawful_neutral",
    "lawful_evil",
    "neutral_good",
    "neutral",
    "neutral_evil",
    "chaotic_good",
    "chaotic_neutral",
    "chaotic_evil",
    
    "any",
    "any_not_good",
    "any_not_evil",
    "any_not_lawful",
    "any_not_chaotic",
    "any_not_neutral",
    "any_good",
    "any_evil",
    "any_lawful",
    "any_chaotic",
    "any_neutral",
    "unaligned"
] as const


export const DnD5eCreatureSheetSchema = z.object({
    name: z.string().min(1),
    type: z.string(),
    size: z.string(),
    alignment: z.enum(DnD5eAlignment),
    armorClass: z.object({
        value: z.number().int().min(1),
        details: z.string().optional()
    }),
    initiativeBonus: z.number().int(),
    proficiencyBonus: z.number().min(1),
    abilitiesScores: z.object({
        strength: z.number().int().nonnegative(),
        dexterity: z.number().int().nonnegative(),
        constitution: z.number().int().nonnegative(),
        intelligence: z.number().int().nonnegative(),
        wisdom: z.number().int().nonnegative(),
        charisma: z.number().int().nonnegative(),
    }),
    savingThrows: z.object({
        strength: z.number().int().optional(),
        dexterity: z.number().int().optional(),
        constitution: z.number().int().optional(),
        intelligence: z.number().int().optional(),
        wisdom: z.number().int().optional(),
        charisma: z.number().int().optional(),
    }),
    senses: z.array(z.string().min(1)),
    languages: z.array(z.string().min(1)),
    immunities: z.array(z.string().min(1)),
    immunitiesToCondition: z.array(z.string().min(1)),
    resistances: z.array(z.string().min(1)),
    weaknesses: z.array(z.string().min(1)),
    proficiencies: z.array(z.object({
        name: z.string().min(1),
        bonus: z.number().int().min(2)
    })),
    skills: z.array(z.object({
        title: z.string().min(1),
        description: z.string()
    })),
    actions: z.array(z.object({
        title: z.string().min(1),
        description: z.string()
    })),
    reactions: z.array(z.object({
        title: z.string().min(1),
        description: z.string()
    })),
    legendaryActions: z.object({
        quantityPerTurn: z.number().int().nonnegative(),
        options: z.array(z.object({
            title: z.string().min(1),
            description: z.string()
        }))
    }).optional(),
    challengeRating: z.string()
})

export type DnD5eCreatureSheet = z.infer<typeof DnD5eCreatureSheetSchema>
