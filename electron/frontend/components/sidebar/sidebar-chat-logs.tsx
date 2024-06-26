import { useEffect } from 'react'
import { Ellipsis, Trash } from 'lucide-react'
import useReadSessions from '@/lib/services/sessionService/use-read-sessions'
import useDeleteSession from '@/lib/services/sessionService/use-delete-session'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover'
import { useRouter } from 'next/navigation'
import handleNavigate from './handleNavigate'

const SidebarChatLogs = () => {
    const { sessions, loading, error, refreshSessions } = useReadSessions()
    const { deleteSession } = useDeleteSession()
    const router = useRouter()

    useEffect(() => {
        refreshSessions()
    }, [])

    // function clearChatAndRefresh() {
    //     clearChatData()
    //     location.reload()
    // }

    async function deleteChat(sessionId: string) {
        try {
            await deleteSession(sessionId) // Wait for the delete operation to complete
            await refreshSessions() // Then refresh the list of sessions
        } catch (error) {
            console.error('Failed to delete or refresh sessions:', error)
            // TODO: Optionally set an error state here and show it in the UI
        }
    }

    return (
        <div className="flex flex-col mt-2">
            {loading && <div className="px-2 py-2">Loading chats...</div>}
            {error && (
                <div className="px-2 py-2 text-red-400">
                    Error loading: {error}
                </div>
            )}
            {!loading &&
                sessions &&
                sessions.reverse().map((chatId: string, index: number) => (
                    <div
                        key={chatId}
                        className="flex relative justify-between w-full group items-center smooth-hover rounded-md"
                    >
                        <button
                            className="relative px-4 py-3 flex w-full"
                            onClick={() => handleNavigate(chatId)}
                        >
                            <span className="text-ellipsis">
                                {chatId ? chatId : '(Unnamed chat)'}
                            </span>
                        </button>

                        <Popover>
                            <PopoverTrigger asChild>
                                <button className="opacity-0 group-hover:opacity-100 right-0 px-1 pl-1 pr-3 group-hover:hover-opacity">
                                    <Ellipsis size={24} className="pt-1" />
                                </button>
                            </PopoverTrigger>
                            <PopoverContent className="bg-night w-fit p-0">
                                <button
                                    onClick={() => deleteChat(chatId)}
                                    className="flex gap-2 justify-start items-center min-w-[180px] p-4"
                                >
                                    <Trash size={16} /> Delete chat
                                </button>
                            </PopoverContent>
                        </Popover>
                    </div>
                ))}
        </div>
    )
}

export default SidebarChatLogs
