import { Container } from "@/components/common/container";
import { Section } from "@/components/common/section";
export function Team() {
    const items =
        [{
            id: 1,
            title: "1. Dr. Anupriya (Founder)"
        },
        {
            id: 2,
            title: "2. Dr. Ananya Iyer (Prosthodontist)"
        },
        {
            id: 3,
            title: "3. Dr. Meera Subramanian (Endodontist)"
        },
        {
            id: 4,
            title: "4. Dr. Arvind Kumar (Dental Surgeon)"
        },
        {
            id: 5,
            title: "5. Dr. Sneha N (Orthodontist)"
        },
        {
            id: 6,
            title: "6. Dr. Srinivas Rohit Ramanujam (Implantologist)"
        },
        {
            id: 7,
            title: "7. Dr. Balu (Laser Surgeon)"
        },
        {
            id: 8,
            title: "8. Dr. Vikram Raj Kishore (Aligners Partner)"
        },
        {
            id: 9,
            title: "9. Dr. Ajay Jumar (Oral & Maxillofacial Surgeon)"
        },];
    return (
        <section className="border rounded-2xl ml-16 mr-16 mb-8">
            <Container>
                <div className="text-center mt-4">
                    <h2 className="text-3xl font-bold">
                        Our Team of Doctors:
                    </h2>
                </div>
                <div className="mt-1 grid gap-3 md:grid-cols-1 rounded-2xl lg:grid-cols-1">
                    {items.map((items) => (
                        <div key={items.id} className="rounded-xl mb-1 border p-1 place-items-center">

                            <div className="mt-1 text-left">
                                <h3 className="font-semibold ">
                                    {items.title}
                                </h3>
                            </div>

                        </div>
                    ))}
                </div>
            </Container>

        </section>

    );

}