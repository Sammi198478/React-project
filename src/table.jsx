function Table() {
  

    return (
      <>
      <h1 className='text-center bg-red-800 text-[black]' >Welcome</h1>
  
      <table className='border-collapse border border-slate-500'>
        <thead>
          <tr>
            <th className='border border-slate-600'>Language</th>
            <th className='border border-slate-600'>Framework</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='border border-slate-800'>JavaScript</td>
            <td className='border border-slate-800'>React JS</td>
          </tr>
          <tr>
            <td className='border border-slate-800'>Python</td>
            <td className='border border-slate-800'>Flask</td>
          </tr>
          <tr>
            <td className='border border-slate-800'>PHP</td>
            <td className='border border-slate-800'>Laravel</td>
          </tr>
        </tbody>
      </table>
     
      </>
    );
  }
  export default Table;