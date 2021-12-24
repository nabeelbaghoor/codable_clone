<template>
    <div>
        <div class="firstpara">
      <section class="p-5 p-lg-0 pt-lg-5 text-center text-start">
        <div class="container">
          <div class="d-flex align-items-center justify-content-between">
            <div class="firstparatext">
              <h1> {{webscrip.headdescrip}}</h1>
              <p class="lead my-4">
                {{webscrip.bodydescrip}}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>

    <section class="text-dark p-5">
      <input
        type="text"
        
        placeholder="Search"
        width="30"
      />
      
    </section>
    <div>
      <p class="text-dark p-5">Showing 506 results</p>
    </div>

    </div>
</template>

<script>
export default {
 props:{
        webscrip:{}
    }
}
</script>