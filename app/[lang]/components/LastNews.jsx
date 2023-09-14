import Link from "next/link";

export default function LastNews({lang}) {
  return (
    <section>
      <h2 class='mb-12 text-center text-3xl font-bold'>Latest News</h2>

      <div class='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
        <div
          class='zoom relative overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20'
          data-te-ripple-init
          data-te-ripple-color='light'
        >
          <img
            src='https://images.unsplash.com/photo-1546422904-90eab23c3d7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80'
            class='w-full align-middle transition duration-300 ease-linear'
          />
          <Link href={`/news/news1`}>
            <div class='absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.4)] bg-fixed'>
              <div class='flex h-full items-end justify-start'>
                <div class='m-6 text-white'>
                  <h5 class='mb-3 text-lg font-bold'>News No.1</h5>
                  <p>
                    <small>
                      Published <u>13.09.2023</u>
                    </small>
                  </p>
                </div>
              </div>
            </div>
            <div class='absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed transition duration-300 ease-in-out hover:bg-[hsla(0,0%,99%,0.15)]'></div>
          </Link>
        </div>

        <div
          class='zoom relative overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20'
          data-te-ripple-init
          data-te-ripple-color='light'
        >
          <img
            src='https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80'
            class='w-full align-middle transition duration-300 ease-linear'
          />
          <Link href={`/news/news1`}>
            <div class='absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.4)] bg-fixed'>
              <div class='flex h-full items-end justify-start'>
                <div class='m-6 text-white'>
                  <h5 class='mb-3 text-lg font-bold'>News NO.2</h5>
                  <p>
                    <small>
                      Published <u>12.09.2023</u>
                    </small>
                  </p>
                </div>
              </div>
            </div>
            <div class='absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed transition duration-300 ease-in-out hover:bg-[hsla(0,0%,99%,0.15)]'></div>
          </Link>
        </div>

        <div
          class='zoom relative overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20'
          data-te-ripple-init
          data-te-ripple-color='light'
        >
          <img
            src='https://images.unsplash.com/photo-1478940020726-e9e191651f1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
            class='w-full align-middle transition duration-300 ease-linear'
          />
          <Link href={`/news/news1`}>
            <div class='absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.4)] bg-fixed'>
              <div class='flex h-full items-end justify-start'>
                <div class='m-6 text-white'>
                  <h5 class='mb-3 text-lg font-bold'>Lonely mountain</h5>
                  <p>
                    <small>
                      Published <u>10.09.2023</u>
                    </small>
                  </p>
                </div>
              </div>
            </div>
            <div class='absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed transition duration-300 ease-in-out hover:bg-[hsla(0,0%,99%,0.15)]'></div>
          </Link>
        </div>
      </div>
    </section>
  )
}
