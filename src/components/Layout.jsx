import { ThemeToggle } from './ThemeToggle'

export const Layout = () => {

   return (
      <div className="assistent">
         <header className="header py-4 px-4 bg-[var(--color-card)]">
            <div className="header__container flex items-center justify-between w-full">
               <h1 className="text-2xl font--bold bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] bg-clip-text text-transparent">Мой Помощник</h1>
               <ThemeToggle />
            </div>
         </header>
      </div>
   );
}