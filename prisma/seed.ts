import {prisma} from "@/prisma"

async function seed() {
    await prisma.user.createMany({
        data: [
            {
                name: "Pablo",
                email: "Pablo@gmail.com",
            },
             {
                name: "Ana",
                email: "Ana@gmail.com",
            },
        ]
    })
}
seed().then(() => {
    console.log("Database seeded!")
    prisma.$disconnect()
})