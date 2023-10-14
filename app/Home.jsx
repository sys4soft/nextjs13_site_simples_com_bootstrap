import Link from "next/link"

export default function Home() {
    return (
        <>
            <section className="section-one">
                <div className="container">
                    <div className="row">
                        <div className="col py-5">
                            <p className="section-one-title">New York é top!</p>
                            <p className="section-one-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam a nobis corrupti sed vel unde assumenda ratione libero atque alias quod, eligendi animi, eos doloribus, dolores officia distinctio voluptas quia.
                                Dolorum eligendi voluptas, temporibus velit eum culpa inventore officia minus maiores optio quibusdam nam, repellat harum cumque distinctio assumenda. Reiciendis accusamus repudiandae quae. Animi dolorem ex sapiente laudantium ea in!
                                Eligendi itaque asperiores aut in, repellat dicta iure atque quo ipsa perspiciatis molestiae cupiditate impedit sit assumenda fugiat commodi dolore necessitatibus ex. Quam ullam, reprehenderit expedita labore iste eum eos!</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-two">
                <div className="container">
                    <div className="row">
                        <div className="col py-5 text-center">
                            <h4 className="mb-5">Descobre os principais pontos de interesse da cidade</h4>
                            <div className="text-center">
                                <Link href="/points" class="btn btn-outline-light py-3 px-5"><h4>Pontos de interesse</h4></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-three">
                <div className="container">
                    <div className="row">
                        <div className="col py-5 text-center">
                            <h4>Consulta o mapa interativo</h4>
                            <p className="py-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam dolorem pariatur asperiores consequuntur omnis corrupti architecto beatae quos ab. Totam in, harum aut fugit accusantium quas labore distinctio animi possimus?
                                Ducimus atque tenetur, reiciendis dignissimos corporis repellat velit dolores facere excepturi eaque eius, impedit voluptatum voluptatem commodi omnis? Esse alias eveniet deserunt voluptates numquam non? Est voluptate perspiciatis modi suscipit.</p>
                            <div className="text-center">
                                <Link href="/map" class="btn btn-outline-dark py-3 px-5"><h4>Consultar o mapa</h4></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}