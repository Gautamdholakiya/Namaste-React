const Footer = () => {
    return(
        <footer className="bg-black text-white text-center p-4 relative bottom-0 w-[100%] mt-3.5">
            <div>
                <p>&copy; {new Date().getFullYear()} My Website. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer