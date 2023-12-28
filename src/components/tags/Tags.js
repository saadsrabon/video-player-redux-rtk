import { useEffect } from "react";
import Tag from "./Tag";
import { useDispatch, useSelector } from "react-redux";

import { fetchTags } from "../../features/tags/tagsSlice";

export default function Tags() {
    const dispatch = useDispatch();
    const tagsItem = useSelector((state) => state?.tags?.tags) || [];
    useEffect(() => {
        dispatch(fetchTags());
       
    }, [dispatch]);
    return (
        <section>
            <div className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 border-b overflow-y-auto">
               {
                tagsItem.map((tag) => (
                    <Tag key={tag.id} tag={tag} />
                ))
               }
            </div>
        </section>
    );
}
