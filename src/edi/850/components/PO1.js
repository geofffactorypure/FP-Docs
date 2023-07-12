export default function PO1() {
    return (
        <div id="po1" className="text-offwhite rounded-[4px] p-[32px] shadow-small bg-darkaccent mb-[16px]">
            <h2 className="text-offwhite border-b pb-[8px] font-bold text-[20px] leading-[1] mb-[16px]">PO1 Segment</h2>
            <p className="text-offwhite mb-[16px]">To specify basic and most frequently used line item data.</p>
            <p className="text-fire font-bold leading-[1] mb-[16px] text-[18px]">Usage</p>
            <div className="text-offwhite grid grid-cols-[1fr_200px_1fr_1fr_1fr_1fr] gap-x-[16px] mb-[32px]">
                <div className="text-offwhite font-bold text-[12px] uppercase grid grid-cols-[1fr_200px_1fr_1fr_1fr_1fr] gap-x-[16px] col-span-full pb-[4px] mb-[8px] border-b border-darkgrey">
                    <div>Id</div>
                    <div>Segment Name</div>
                    <div>Req</div>
                    <div>Max Use</div>
                    <div>Loop</div>
                    <div>Notes</div>
                </div>
                <div className="text-offwhite grid grid-cols-[1fr_200px_1fr_1fr_1fr_1fr] gap-x-[16px] col-span-full pb-[4px] mb-[8px] border-b border-darkgrey">
                    <div>PO1</div>
                    <div>Baseline Item Data</div>
                    <div>M</div>
                    <div>1</div>
                    <div>PO1</div>
                    <div></div>
                </div>
            </div>
            <p className="text-fire font-bold leading-[1] mb-[16px] text-[18px]">Elements</p>
            <div className="text-offwhite grid grid-cols-[1fr_1fr_200px_1fr_1fr_1fr_1fr_1fr] gap-x-[16px] mb-[32px]">
                <div className="text-offwhite font-bold text-[12px] uppercase grid grid-cols-[1fr_1fr_200px_1fr_1fr_1fr_1fr] gap-x-[16px] col-span-full pb-[4px] mb-[8px] border-b border-darkgrey">
                    <div>Ref</div>
                    <div>ID</div>
                    <div>Element Name</div>
                    <div>Req</div>
                    <div>Type</div>
                    <div>Min/max</div>
                    <div>Codes</div>
                </div>
                <div className="text-offwhite grid grid-cols-[1fr_1fr_200px_1fr_1fr_1fr_1fr] gap-x-[16px] col-span-full pb-[4px] mb-[8px] border-b border-darkgrey">
                    <div>PO101</div>
                    <div>350</div>
                    <div>Assigned Identification</div>
                    <div>M</div>
                    <div>AN</div>
                    <div>1/20</div>
                    <div></div>
                    <div className="col-span-full px-[8px] text-[16px] font-bold my-[8px]">Line number. Typical 3 digits like '001'.</div>
                </div>
                <div className="text-offwhite grid grid-cols-[1fr_1fr_200px_1fr_1fr_1fr_1fr] gap-x-[16px] col-span-full pb-[4px] mb-[8px] border-b border-darkgrey">
                    <div>PO102</div>
                    <div>330</div>
                    <div>Quantity Ordered</div>
                    <div>M</div>
                    <div>R</div>
                    <div>1/15</div>
                    <div></div>
                </div>
                <div className="text-offwhite grid grid-cols-[1fr_1fr_200px_1fr_1fr_1fr_1fr] gap-x-[16px] col-span-full pb-[4px] mb-[8px] border-b border-darkgrey">
                    <div>PO103</div>
                    <div>355</div>
                    <div>Unit or Basis for Measurement Code</div>
                    <div>M</div>
                    <div>ID</div>
                    <div>2/2</div>
                    <div>EA</div>
                </div>
                <div className="text-offwhite grid grid-cols-[1fr_1fr_200px_1fr_1fr_1fr_1fr] gap-x-[16px] col-span-full pb-[4px] mb-[8px] border-b border-darkgrey">
                    <div>PO104</div>
                    <div>212</div>
                    <div>Unit Price</div>
                    <div>O</div>
                    <div>R</div>
                    <div>1/17</div>
                    <div></div>
                    <div className="col-span-full px-[8px] text-[16px] font-bold my-[8px]">Always in USD.</div>
                </div>
                <div className="text-offwhite grid grid-cols-[1fr_1fr_200px_1fr_1fr_1fr_1fr] gap-x-[16px] col-span-full pb-[4px] mb-[8px] border-b border-darkgrey">
                    <div>PO105</div>
                    <div>639</div>
                    <div>Basis of Unit Price Code</div>
                    <div>O</div>
                    <div>ID</div>
                    <div>2/2</div>
                    <div>PE</div>
                </div>
                <div className="text-offwhite grid grid-cols-[1fr_1fr_200px_1fr_1fr_1fr_1fr] gap-x-[16px] col-span-full pb-[4px] mb-[8px] border-b border-darkgrey">
                    <div>PO106</div>
                    <div>235</div>
                    <div>Product ID Qualifier</div>
                    <div>M</div>
                    <div>ID</div>
                    <div>2/2</div>
                    <div>CB</div>
                </div>
                <div className="text-offwhite grid grid-cols-[1fr_1fr_200px_1fr_1fr_1fr_1fr] gap-x-[16px] col-span-full pb-[4px] mb-[8px] border-b border-darkgrey">
                    <div>PO107</div>
                    <div>234</div>
                    <div>Product ID</div>
                    <div>M</div>
                    <div>AN</div>
                    <div>1/48</div>
                    <div></div>
                    <div className="col-span-full px-[8px] text-[16px] font-bold my-[8px]">FactoryPure SKU.</div>
                </div>
                <div className="text-offwhite grid grid-cols-[1fr_1fr_200px_1fr_1fr_1fr_1fr] gap-x-[16px] col-span-full pb-[4px] mb-[8px] border-b border-darkgrey">
                    <div>PO108</div>
                    <div>235</div>
                    <div>Product ID Qualifier</div>
                    <div>M</div>
                    <div>ID</div>
                    <div>2/2</div>
                    <div>SK</div>
                </div>
                <div className="text-offwhite grid grid-cols-[1fr_1fr_200px_1fr_1fr_1fr_1fr] gap-x-[16px] col-span-full pb-[4px] mb-[8px] border-b border-darkgrey">
                    <div>PO109</div>
                    <div>234</div>
                    <div>Product ID</div>
                    <div>M</div>
                    <div>AN</div>
                    <div>1/48</div>
                    <div></div>
                    <div className="col-span-full px-[8px] text-[16px] font-bold my-[8px]">Supplier SKU.</div>
                </div>
            </div>
        </div>
    )
}