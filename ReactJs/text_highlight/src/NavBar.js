import { Button } from '@mui/material'
import React, { useContext, useState, useEffect } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import { Para } from './App'
function NavBar() {
    const [searchTxt, setSearchTxt] = useState("");
    const [paragraph, setParagraph] = useState("Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, illum esse iste aperiam quas reiciendis obcaecati, culpa eius veniam explicabo ducimus porro fuga placeat unde tempore? Nostrum, necessitatibus quaerat excepturi incidunt accusamus consequuntur dolore nemo iusto ullam dolores fuga odit fugit harum ad corporis cumque eligendi a repellat laboriosam ea sit qui. Sit laudantium ratione, ducimus maiores velit sunt laborum ex, natus qui rem minus nam. Est, magnam dolores atque maiores impedit non recusandae sint odit corrupti aut blanditiis eveniet repudiandae consequuntur voluptatem officia asperiores eos dignissimos saepe soluta animi aperiam, obcaecati facere ab. Voluptate a harum quia dolorem. Quidem."
    )
    var p;
    // var paragraph = useContext(Para);
    useEffect(() => {





    }, [paragraph])
    function search() {
        let search = searchTxt;
        search = search.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        let pattern = new RegExp(`${search}`, "gi");

        setParagraph(paragraph.replace(pattern, match => `<mark>${match}</mark>`))
        p = paragraph;
    }

    return (<>
        <div className='navBar'>
            <div className='box'>
                <div className='wrapper'>
                    <div className='leftCanvas'>
                        <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions"><MenuIcon fontSize='large' /></button>

                        <div class="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
                            <div class="offcanvas-header" style={{ backgroundColor: "#5343C7", color: "#fff", height: "10vh", width: "100%", overflow: "visible", textAlign: "center" }}>
                                <h3 class="offcanvas-title" id="offcanvasWithBothOptionsLabel" style={{ marginLeft: "30%" }} >Records</h3>
                                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div class="offcanvas-body">
                                <p>Try scrolling the rest of the page to see this option in action.</p>
                            </div>
                        </div>
                    </div>
                    <div className='catagory'>
                        <Button variant="outlined" size="medium" sx={{ backgroundColor: "white", color: "#5343C7", fontSize: "large", fontWeight: "bold" }}>
                            Person</Button>
                        <Button variant="outlined" size="medium" sx={{ backgroundColor: "white", color: "#5343C7", fontSize: "large", fontWeight: "bold" }}>
                            ORG</Button>
                    </div>
                    <div className='search'>
                        <input type='text' id="text-to-search" placeholder='Search' onChange={(e) => { setSearchTxt(e.target.value); console.log(searchTxt); }} />
                        <Button onClick={search}><SearchIcon htmlColor='white' fontSize='large' /></Button>
                    </div>
                    <div className='rightCanvas'>
                        <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><MenuIcon fontSize='large' /></button>

                        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                            <div class="offcanvas-header" style={{ backgroundColor: "#5343C7", color: "#fff", height: "10vh", width: "100%", overflow: "visible", }}>
                                <h3 class="offcanvas-title" id="offcanvasRightLabel" style={{ marginLeft: "30%" }}>Annotations</h3>
                                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div class="offcanvas-body">
                                ...
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            {console.log(paragraph)}
        </div>
        <div className='main'>



            <p id='paragraph'>
                {paragraph}
            </p>
        </div>
    </>
    )
}

export default NavBar
