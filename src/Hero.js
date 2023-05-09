import styles from './Hero.module.css'

function Hero(){

    return(

        <section className={styles.hero}>

            <img src="https://images.unsplash.com/photo-1585184394271-4c0a47dc59c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXBwbGUlMjBsb2dvfGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt="Image" height="400px" width="450px"/>
            <p>
                
            Apple Inc. is an American multinational technology company headquartered in Cupertino, California. Apple is the world's largest technology company by revenue, with US$394.3 billion in 2022 revenue. As of March 2023, Apple is the world's biggest company by market capitalization. As of June 2022, Apple is the fourth-largest personal computer vendor by unit sales and second-largest mobile phone manufacturer. It is one of the Big Five American information technology companies, alongside Alphabet Inc. parent company of Google, Amazon, Meta Platforms formerly Facebook, Inc., and Microsoft.
                

            </p>

        </section>
    )


}
export default Hero;