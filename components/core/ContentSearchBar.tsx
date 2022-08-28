import { MagnifyingGlass } from "phosphor-react";
import { FC, useEffect, useRef, useState } from "react";
import useOnclickOutside from "react-cool-onclickoutside";
import { useHotkeys } from "react-hotkeys-hook";
import { useDebounce } from "use-debounce";
import { useTrpcQuery } from "utils/trpc";

export const PostSearchBar: FC = () => {
    const [search, setSearch] = useState('')
    const [isOnFocus, setIsOnFocus] = useState(false)
    useDebounce(search, 1000)
    const { data: posts, isLoading: isContentsLoading } = useTrpcQuery(['posts:search', search], {
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
    
    const shouldRenderList = 
        Boolean(posts?.length) 
        && search
        && isOnFocus
    
    const shouldRenderLoading =
        search && isOnFocus && isContentsLoading
    
    const shouldRenderNothingFound =
        search && isOnFocus && !isContentsLoading && !posts?.length
    
    return (
        <>
            <section ref={inside} className="relative flex min-h-[3rem] flex-col gap-4">
                <div className="input z-50 flex items-center transition-all focus-within:input-bordered focus-within:input-primary focus-within:absolute focus-within:top-0 focus-within:left-0 focus-within:w-80 ">
                    <MagnifyingGlass weight="bold" className="mr-3 h-4 w-4 text-base-content" />
                    <input type="text" 
                    placeholder="Search..."
                    ref={searchInputRef}
                    onFocus={() => setIsOnFocus(true)}
                    value={search} 
                    onChange={(event) => setSearch(event.target.value)} 
                    className="h-full flex-1 text-ellipsis bg-transparent outline-none" />
                    
                    <section className="pointer-events-none invisible absolute right-2 opacity-60 md:visible">
                        <kbd className="kbd">ctrl</kbd> + <kbd className="kbd">k</kbd>
                    </section>
                </div>
                
                <section className="absolute left-0 top-[130%] flex w-80 flex-col items-center rounded bg-base-300 py-2 text-base-content shadow empty:invisible sm:w-96">
                    { (shouldRenderList) && (
                        <>
                            <ul className="w-full">
                                {search.length && posts?.map((post) => 
                                    <li key={post.id}>
                                        <a onClick={() => {setIsOnFocus(true); console.log(post)}} className="flex w-full cursor-pointer select-none flex-col items-start gap-1 p-2 px-4 active:bg-primary active:text-primary-content" >
                                            <span className="font-semibold ">{post.title} <span className="opacity-60">({post.system})</span></span>
                                            <section className="flex flex-wrap gap-1">
                                                {post.tags.map((tag) => <div key={tag.id} className="badge badge-primary">{tag.name}</div>)}
                                            </section>
                                            <span className="text-ellipsis text-sm">{post.text}</span>
                                        </a> 
                                    </li>
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