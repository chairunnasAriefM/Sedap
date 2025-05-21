export default function HelloWorld() {

    const propsUserCard = {
        nama: "Kamu",
        nim: "2355301032",
        tanggal: "2025-3-12"
    }

    return (
        <div>
            <h1>Hello World</h1>
            <p>Selamat belajar ReactJs</p>
            <GreetingBinjai />
            <QuoteText />
            <UserCard
                nama="Chairunnas"
                nim="2355301032"
                tanggal={new Date().toLocaleDateString()}
            />

            <UserCard {...propsUserCard} />

            <img src="img/images.jpg" alt="logo" />

        </div>

    )
}

function GreetingBinjai() {
    return (
        <small>Salam dari Binjai</small>
    )
}

function QuoteText() {
    const text = "Mulutmu Harimaumu";
    const text2 = "Aku ingin menjadi macan";
    return (
        <div>
            <hr />
            <p>{text.toLowerCase()}</p>
            <p>{text2.toUpperCase()}</p>
        </div>
    )
}

function UserCard(props) {
    return (
        <div>
            <hr />
            <h3>Nama: {props.nama}</h3>
            <p>NIM: {props.nim}</p>
            <p>Tanggal: {props.tanggal}</p>
        </div>
    )
}