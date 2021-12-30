function Color(props) {
    
    return (
      <div>
        <input type="color" onChange={e=>props.setColor(e.target.value)}  />
      </div>
    );
  }

export default Color