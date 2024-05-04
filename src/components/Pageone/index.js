const Pageone=()=><div>
    <form>
        <input required type="text" placeholder="Enter Your Name"/>
        <br/>
        <input required type="text" placeholder="Enter your AGE"/>
        <br/>
        <input required id='male' name="group"  type="radio" />
        <label for='male'>Male</label>
        <input required type="radio" name="group"  id="female" />
        <label for='female'>female</label>
        <br/>
        <textarea required cols={20} rows={10}/>
        <br/>
        <button type="submit"> submit</button>
        
    </form>
    
    </div>


export default Pageone;