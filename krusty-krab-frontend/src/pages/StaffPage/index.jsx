import './index.scss'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'

function StaffPage() {

    return (
      <div>
        <Nav/>
        <div>
          <div>
            <img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fimages3.wikia.nocookie.net%2F__cb20130120145732%2Fspongebob%2Fimages%2F0%2F07%2FSpongeBob_SquarePants.png&f=1&nofb=1&ipt=72eff94633768c98b7c98ba21653b79ab8b2f22cf4d2239c37883af89721e6d3&ipo=images" alt="The Sponge Profile Picture"/>
            <h4>SpongeBob Squarepants</h4>
            <p>Fry Cook</p>
          </div>
          <div>
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.wikia.nocookie.net%2Fnickelodeon%2Fimages%2Fe%2Fea%2FSquidward_in_2018.png%2Frevision%2Flatest%3Fcb%3D20190227183729&f=1&nofb=1&ipt=c10147d11e844e92f4fd087f25e8c8dd066d050c75f3573d4404087c966394d5&ipo=images" alt="Squidward Profile Picture"/>
            <h4>Squidward Tentacles</h4>
            <p>Cashier</p>
          </div>
          <div>
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvignette.wikia.nocookie.net%2Fnickelodeon%2Fimages%2Fb%2Fb4%2FMr._krabs_spongebob_squarepants.png%2Frevision%2Flatest%3Fcb%3D20170904063857&f=1&nofb=1&ipt=bd0acd2bf7425d0bece0c665f245ac828cefa20c80e9c92395b8d8b66f76b423&ipo=images" alt="Mr.Krabs Profile Picture"/>
            <h4>Mr.Krabs</h4>
            <p>Manager/Owner</p>
          </div>
        </div>
        <Footer/>
      </div>
    )
}
  
export default StaffPage