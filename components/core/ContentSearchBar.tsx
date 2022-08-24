import { MagnifyingGlass } from "phosphor-react";
import { FC, useEffect, useRef, useState } from "react";
import useOnclickOutside from "react-cool-onclickoutside";
import { useHotkeys } from "react-hotkeys-hook";
import { useDebounce } from "use-debounce";
import { trpc } from "utils/trpc";

export const ContentSearchBar: FC = () => {
    const [search, setSearch] = useState('')
    const [isOnFocus, setIsOnFocus] = useState(false)
    useDebounce(search, 1000)
    const { data: contents, isLoading: isContentsLoading } = trpc.useQuery(['creatures.search', search], {
        enabled: search.length > 0
    })
    const searchInputRef = useRef<HTMLInputElement>(null)
    const inside = useOnclickOutside(() => {
        setIsOnFocus(false)
    })
    
    useHotkeys('ctrl+k', (event) => {
        event.preventDefault()
        searchInputRef.current?.focus()
    })
    
    const shouldRenderContentList = 
        Boolean(contents?.length) 
        && search
        && isOnFocus
    
    const shouldRenderLoading =
        search && isOnFocus && isContentsLoading
    
    const shouldRenderNothingFound =
        search && isOnFocus && !isContentsLoading && !contents?.length
    
    return (
        <>
            <section ref={inside} className="relative flex flex-col gap-4">
                <div className=" input relative flex w-64 items-center transition-colors focus-within:input-bordered focus-within:input-primary sm:w-80">
                    <MagnifyingGlass className="mr-3 h-4 w-4 text-base-content" />
                    <input type="text" 
                    placeholder="Search..."
                    ref={searchInputRef}
                    onFocus={() => setIsOnFocus(true)}
                    value={search} 
                    onChange={(event) => setSearch(event.target.value)} 
                    className="h-full flex-1 bg-transparent outline-none" />
                    
                    <section className="invisible absolute right-2 opacity-60 md:visible">
                        <kbd className="kbd">ctrl</kbd> + <kbd className="kbd">k</kbd>
                    </section>
                </div>
                
                <section className="absolute top-[120%] flex w-80 flex-col items-center rounded bg-base-300 py-2 text-base-content empty:invisible sm:w-96">
                    { (shouldRenderContentList) && (
                        <>
                            <ul className="w-full">
                                {search.length && contents?.map((content) => 
                                    <button onClick={() => {setIsOnFocus(true); console.log(content)}} className="flex w-full flex-col gap-1 p-2 px-4 text-start transition active:scale-95" key={content.id}>
                                        <span className="font-semibold">{content.name} <span className="opacity-60">({content.sheetCode})</span></span>
                                        <section className="flex flex-wrap gap-1">
                                            {content.tags.map((tag) => <div key={tag.id} className="badge badge-primary">{tag.name}</div>)}
                                        </section>
                                        <span className="text-ellipsis text-sm">{content.description}</span>
                                    </button> 
                                )}
                            </ul>
                        </>
                    )}
                    
                    { (shouldRenderLoading) && (
                        <>
                            <span>Loading ...</span>
                            <progress className="progress progress-primary w-56"></progress>
                        </>
                    )}
                    
                    {(shouldRenderNothingFound) && (
                        <>
                            <span>Sorry nothing was found 😢</span>
                        </>
                    )}
                </section>
            </section>
        </>
    )
}