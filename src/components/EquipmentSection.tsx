import { EquipmentList } from "./EquipmentList"
import equipmentItems from "../data/data.json";

export const EquipmentSection = () => {
    return (
        <section className="equipment">
            <div className="container">
                <div className="equipment__wrapper">
                    <EquipmentList items={equipmentItems}/>
                </div>
            </div>
        </section>
    )
}