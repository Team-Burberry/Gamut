export default function SignUp(){
  return(
    <div>
      <h2>SignUp</h2>
      <form>
        <input type="text" placeholder="name"/>
        <input type="email" placeholder="email@email.com"/>
        <input type="password" placeholder="******"/>
        <input type="date"/>
        <input type="text" placeholder="city"/>
        <input type="text" placeholder="state"/>
        <select name="gender">
          <option value="">Gender selection</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="non-binary">Non Binary</option>
        </select>
        <button>Next</button>
      </form>
      <p>Have an account? <a href="./login">login</a></p>
    </div>
  )
}