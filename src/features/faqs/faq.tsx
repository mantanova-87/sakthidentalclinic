import { Section } from "@/components/common/section";
import { Container } from "@/components/common/container";

export function FAQ() {
    const item =
        [{
            question: "1. Can medication completely relieve tooth pain?",
            answer: "Not entirely. While medications may offer short-term relief, long-lasting relief requires identifying and treating the root cause of the pain through professional dental care.",
        },
        {
            question: "2. Does teeth scaling cause enamel damage, sensitivity, or gaps between teeth?  ",
            answer: "No. Scaling safely removes plaque and tartar from teeth and below the gum line. It doesn’t damage enamel or create gaps. Some temporary sensitivity may occur, but it usually subsides as gums heal and reattach to the teeth. ",
        },
        {
            question: "3. Can fluorosis stains be removed through scaling?",
            answer: "Scaling can remove surface (extrinsic) stains but not fluorosis, which is an internal (intrinsic) stain.Fluorosis may require treatments like bleaching, veneers, or crowns for cosmetic improvement.",
        },
        {
            question: "4. Can painful teeth be treated with fillings?",
            answer: "Not always. If the cavity has reached the pulp, the innermost layer of the tooth, simple filling won’t help.In such cases, root canal treatment or tooth extraction might be necessary. Fillings are effective only when the damage is limited to the outer layers (enamel and dentin).",
        },
        {
            question: "5. Is placing a cap or crown necessary after root canal treatment (RCT)?",
            answer: "Yes. A crown is recommended after RCT to protect the treated tooth, which may be weaker due to decay.It prevents fractures and adds durability, especially during chewing.",
        },
        {
            question: "6. Can milk teeth need root canal treatment (RCT)?",
            answer: "Yes. If a milk tooth has a deep cavity and is likely to remain in the mouth for some time, an RCT can preserve it and prevent infection or early loss.",
        },
        {
            question: "7. How can I maintain good oral hygiene? ",
            answer: "Brush your teeth twice daily with proper technique, rinse after meals, floss regularly, and schedule routine check-ups with your dentist to maintain healthy teeth and gums. ",
        },
        {
            question: "8. What is the best age to get braces? ",
            answer: "Braces are most effective between ages 12 and 14, when the jaw and teeth are still developing. However, some cases may benefit from earlier intervention depending on the condition. "
        },
        {
            question: "9. Do all wisdom teeth need to be removed? ",
            answer: "No. Wisdom teeth only require removal if they are impacted, infected, or causing pain due to crowding or damage to adjacent teeth. "
        },
        {
            question: "10. Is it important to replace missing teeth after extraction? ",
            answer: "Yes. Replacing extracted teeth helps maintain proper bite alignment and prevents adjacent teeth from shifting, which can affect chewing and overall oral function."
        },
        {
            question: "11. What are the benefits of dental implants? ",
            answer: "Dental implants restore both the appearance and functionality of missing teeth. They provide a stable,natural-looking solution that can improve confidence and overall quality of life."
        },
        {
            question: "12. Which type of toothbrush and toothpaste should I use? ",
            answer: "Use a soft or medium-bristled toothbrush with a small head for better reach. Choose a non-abrasive fluoride toothpaste and replace your toothbrush every three months for optimal hygiene."
        },
        {
            question: "13. What causes tooth sensitivity?",
            answer: "Tooth sensitivity can result from enamel wear (due to attrition or abrasion), tooth decay, exposed tooth roots, or hairline cracks in the teeth."
        },
        {
            question: "14. How often should I see a dentist? ",
            answer: "Visiting your dentist every six months is recommended for routine check-ups, professional cleaning, and preventive care to maintain good oral health."
        },
        ]
    return (
        <Section>
            <Container>
                <div className="text-center">
                    <h2 className="text-3xl font-bold">
                        Frequently Asked Questions(FAQs)
                    </h2>
                </div>

                <div className="mt-12 grid gap-3 md:grid-cols-1 lg:grid-cols-1">
                    {item.map((item) => (
                        <div
                            key={item.question}
                            className="rounded-xl border p-3"
                        >

                            <div className="mt-3">
                                <h3 className="font-semibold">
                                    {item.question}
                                </h3>
                            </div>
                            <p className="text-muted-foreground">
                                {item.answer}
                            </p>
                        </div>
                    ))}
                </div>
            </Container>
        </Section>
    );
}