import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, Input, Card, CardFooter, Image, CardHeader} from "@nextui-org/react";

export const AcmeLogo = () => {
  return (
    <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
      <path
        clipRule="evenodd"
        d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
};

export const PlaceLogo = () => {
  return (
    <svg width="13" height="17" viewBox="0 0 13 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.5 0C4.77609 0 3.12279 0.68482 1.90381 1.90381C0.68482 3.12279 0 4.77609 0 6.5C0 10.8875 5.72813 15.8438 5.97188 16.055C6.11905 16.1809 6.30634 16.2501 6.5 16.2501C6.69366 16.2501 6.88095 16.1809 7.02812 16.055C7.3125 15.8438 13 10.8875 13 6.5C13 4.77609 12.3152 3.12279 11.0962 1.90381C9.87721 0.68482 8.22391 0 6.5 0ZM6.5 14.3406C4.76937 12.7156 1.625 9.21375 1.625 6.5C1.625 5.20707 2.13861 3.96709 3.05285 3.05285C3.96709 2.13861 5.20707 1.625 6.5 1.625C7.79293 1.625 9.03291 2.13861 9.94715 3.05285C10.8614 3.96709 11.375 5.20707 11.375 6.5C11.375 9.21375 8.23063 12.7238 6.5 14.3406ZM6.5 3.25C5.85721 3.25 5.22886 3.44061 4.6944 3.79772C4.15994 4.15484 3.74338 4.66242 3.49739 5.25628C3.25141 5.85014 3.18705 6.50361 3.31245 7.13404C3.43785 7.76448 3.74738 8.34358 4.2019 8.7981C4.65642 9.25262 5.23552 9.56215 5.86596 9.68755C6.49639 9.81295 7.14986 9.74859 7.74372 9.50261C8.33758 9.25662 8.84516 8.84006 9.20228 8.3056C9.55939 7.77114 9.75 7.14279 9.75 6.5C9.75 5.63805 9.40759 4.8114 8.7981 4.2019C8.1886 3.59241 7.36195 3.25 6.5 3.25ZM6.5 8.125C6.17861 8.125 5.86443 8.0297 5.5972 7.85114C5.32997 7.67258 5.12169 7.41879 4.9987 7.12186C4.8757 6.82493 4.84352 6.4982 4.90622 6.18298C4.96892 5.86776 5.12369 5.57821 5.35095 5.35095C5.57821 5.12369 5.86776 4.96892 6.18298 4.90622C6.4982 4.84352 6.82493 4.8757 7.12186 4.9987C7.41879 5.12169 7.67258 5.32997 7.85114 5.5972C8.0297 5.86443 8.125 6.17861 8.125 6.5C8.125 6.93098 7.95379 7.3443 7.64905 7.64905C7.3443 7.9538 6.93098 8.125 6.5 8.125Z" fill="white"/>
    </svg>
  )
}

export const SearchIcon = (props: any) => {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      focusable="false"
      height="1em"
      role="presentation"
      viewBox="0 0 24 24"
      width="1em"
      {...props}
    >
      <path
        d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M22 22L20 20"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

const cards = [
  { title: 'Card 1', link: "https://i.imgur.com/A6m73HO.jpeg"},
  { title: 'Card 2', link: "https://i.imgur.com/ackuWP6.jpeg"},
  { title: 'Card 3', link: "https://i.imgur.com/pvvHrCa.jpeg"},
  { title: 'Card 4', link: "https://i.imgur.com/pDKWgfv.jpeg"},
  { title: 'Card 5', link: "https://i.imgur.com/IHJwlDK.jpeg"},
  { title: 'Card 6', link: "https://i.imgur.com/DHZ5AMb.jpeg"},
  { title: 'Card 7', link: "https://i.imgur.com/A6m73HO.jpeg"},
  { title: 'Card 8', link: "https://i.imgur.com/DHZ5AMb.jpeg"},
];

export default function App() {
  return (
    <div className="h-screen flex flex-col">
      <Navbar shouldHideOnScroll>
      <NavbarBrand>
        <AcmeLogo />
        <p className="font-bold text-inherit">Подбор услуг</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem isActive>
          <Link aria-current="page" href="#">
            Найти услуги
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Для бизнеса
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Поиск вакансий
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
      <NavbarItem className="flex flex-nowrap items-center">
          <div className="pr-2">
            <PlaceLogo />
          </div>
          <div>
            <Link color="foreground" href="#">
              Найти услуги
            </Link>
          </div>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat" className="shadow-[0_5px_60px_-1px_rgba(45,85,255,0.7)]">
            Вход
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
    <div className="flex flex-col justify-center items-center pb-7">
      <div className="w-[740px] h-[140px] px-8 rounded-2xl flex flex-col justify-center items-center text-white shadow-lg mb-4">
        <Input
          isClearable
          classNames={{
            label: "text-black/50 dark:text-white/90",
            input: [
              "bg-transparent",
              "text-black/90 dark:text-white/90",
              "placeholder:text-default-700/50 dark:placeholder:text-white/60",
            ],
            innerWrapper: "bg-transparent",
            inputWrapper: [
              "shadow-xl",
              "bg-default-200/50",
              "dark:bg-default/60",
              "backdrop-blur-xl",
              "backdrop-saturate-200",
              "hover:bg-default-200/70",
              "dark:hover:bg-default/70",
              "group-data-[focus=true]:bg-default-200/50",
              "dark:group-data-[focus=true]:bg-default/60",
              "!cursor-text",
            ],
          }}
          label="Поиск"
          placeholder="Найти услуги..."
          radius="lg"
          startContent={
            <SearchIcon className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
          }
        />
      </div>
      <div className="max-w-[900px] gap-2 grid grid-cols-12 grid-rows-2 px-8">
      <Card className="col-span-12 sm:col-span-4 h-[300px]">
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">Выездные услуги</p>
          <h4 className="text-white font-medium text-large">Проведение мероприятий</h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover"
          src="https://nextui.org/images/card-example-4.jpeg"
        />
      </Card>
      <Card className="col-span-12 sm:col-span-4 h-[300px]">
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">Домашние услуги</p>
          <h4 className="text-white font-medium text-large">Уход за растениями</h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover"
          src="https://nextui.org/images/card-example-3.jpeg"
        />
      </Card>
      <Card className="col-span-12 sm:col-span-4 h-[300px]">
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">Предприятия</p>
          <h4 className="text-white font-medium text-large">Ремонт техники</h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover"
          src="https://nextui.org/images/card-example-2.jpeg"
        />
      </Card>
      <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-5">
        <CardHeader className="absolute z-10 top-1 flex-col items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">New</p>
          <h4 className="text-black font-medium text-2xl">Съемка материала</h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card example background"
          className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
          src="https://nextui.org/images/card-example-6.jpeg"
        />
        <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
          <div>
            <p className="text-black text-tiny">Available soon.</p>
            <p className="text-black text-tiny">Get notified.</p>
          </div>
          <Button className="text-tiny" color="primary" radius="full" size="sm">
            Notify Me
          </Button>
        </CardFooter>
      </Card>
      <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-7">
        <CardHeader className="absolute z-10 top-1 flex-col items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">Специальные упражнения</p>
          <h4 className="text-white/90 font-medium text-xl">Медитации и отдых</h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Relaxing app background"
          className="z-0 w-full h-full object-cover"
          src="https://nextui.org/images/card-example-5.jpeg"
        />
        <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
          <div className="flex flex-grow gap-2 items-center">
            <Image
              alt="Breathing app icon"
              className="rounded-full w-10 h-11 bg-black"
              src="https://nextui.org/images/breathing-app-icon.jpeg"
            />
            <div className="flex flex-col">
              <p className="text-tiny text-white/60">Breathing App</p>
              <p className="text-tiny text-white/60">Get a good night&#39;s sleep.</p>
            </div>
          </div>
          <Button radius="full" size="sm">
            Get App
          </Button>
        </CardFooter>
      </Card>
      <div className="col-span-12 sm:col-span-7 mt-4">
          <h2 className="text-2xl font-bold text-gray-300 dark:text-white">
            Подобрали для вас
          </h2>
        </div>
      </div>
      <div className="pt-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {(() => {
            const cardElements = [];
            for (let i = 0; i < cards.length; i++) {
              cardElements.push(
                <Card
                  key={i} // Ensure each card has a unique key
                  isFooterBlurred
                  className="border-none"
                  radius="lg"
                >
                  <Image
                    alt="Woman listening to music"
                    className="object-cover"
                    height={200}
                    src={cards[i].link}
                    width={200}
                  />
                  <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                    <p className="text-tiny text-white/80">Available soon.</p>
                    <Button
                      className="text-tiny text-white bg-black/20"
                      color="default"
                      radius="lg"
                      size="sm"
                      variant="flat"
                    >
                      Перейти
                    </Button>
                  </CardFooter>
                </Card>
              );
            }
            return cardElements;
          })()}
        </div>
      </div>
    </div>
    <footer className="w-full bg-gray-950 text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-white">О нас</h3>
            <p className="mt-4 text-sm text-gray-400">
              Мы предоставляем услуги, чтобы улучшить вашу жизнь и бизнес.
              Узнайте больше о нас и наших предложениях.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">Ссылки</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="text-sm hover:underline">
                  Найти услуги
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:underline">
                  Для бизнеса
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:underline">
                  Вакансии
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">Контакты</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <span className="text-sm">Email: support@services.com</span>
              </li>
              <li>
                <span className="text-sm">Телефон: +7 (123) 456-78-90</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">Подписка</h3>
            <p className="mt-4 text-sm text-gray-400">
              Подпишитесь на нашу рассылку, чтобы получать последние новости.
            </p>
            <form className="mt-4 flex">
              <input
                type="email"
                placeholder="Введите ваш email"
                className="w-full px-4 py-2 text-gray-900 bg-gray-200 rounded-l-lg focus:outline-none focus:ring focus:ring-blue-500"
              />
              <button
                type="submit"
                className="px-4 py-2 text-white bg-gray-600 rounded-r-lg hover:bg-gray-500 focus:outline-none focus:ring focus:ring-gray-500"
              >
                Подписаться
              </button>
            </form>
          </div>
        </div>
        <div className="mt-10 border-t border-gray-700 pt-6 text-center">
          <p className="text-sm text-gray-500">
            © 2024 Мечты сбываются. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  </div>
  );
}
