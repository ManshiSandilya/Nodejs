
// Create three events:

// "step1" → prints “Step 1 done”

// "step2" → prints “Step 2 done”

// "step3" → prints “Step 3 done”

// When "step1" is emitted, automatically emit "step2".
// When "step2" is emitted, automatically emit "step3".

// Finally, emit "step1".

const em=require('events')
const e=new em()
e.on('step1',()=>{
    console.log("step 1 done")
    e.emit('step2')
})
e.on('step2',()=>{
    console.log("step 2 done")
    e.emit('step3')
})
e.on('step3',()=>{
    console.log("step 3 done")
})
e.emit('step1')