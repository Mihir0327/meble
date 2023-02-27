

function Discount() {
    return (
        <div className="mx-1 flex-col lg:mx-10 flex  lg:flex-row justify-around">
            <div className="mx-5 my-4 ">
                <img className="" height="" src="/NeedItFast.jpg" />
            </div>
            <div className="grid grid-col-1 gap-x-10 lg:grid-col-2 grid-flow-col-dense mx-4">
                <div className="grid-col-1 lg:grid-rows-2 lg:mx-5">
                    <div className="h-[55%]">
                        <img className=" " src="/discount1.png" />
                        <div className="items-center my-4 lg:my-10">
                            <h1 className="text-sm lg:text-2xl font-semibold">Beding Set</h1>
                            <h3 className="text-xs lg:text-lg text-slate-500">consectetur adipisicing elit</h3>
                        </div>
                    </div>
                    <div>
                        <img src="/discount1.png" />
                    </div>
                </div>
                <div className="grid-rows-2">
                    <div className="h-[55%]">
                        <img src="/discount1.png" />
                        <div className=" my-4 lg:my-10">
                            <h1 className="text-sm lg:text-2xl font-semibold">Beding Set</h1>
                            <h3 className="text-xs lg:text-lg text-slate-500">consectetur adipisicing elit</h3>
                        </div>
                    </div>
                    <div>
                        <img src="/discount1.png" />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Discount