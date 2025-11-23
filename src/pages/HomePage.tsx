import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Toaster, toast } from 'sonner';
import { motion } from 'framer-motion';
export function HomePage() {
  const handleCtaClick = () => {
    toast.success('Prueba completada', {
      description: '¡El evento de clic ha sido registrado!',
    });
  };
  return (
    <>
      <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-background p-4">
        <ThemeToggle className="absolute right-4 top-4 z-50 md:right-6 md:top-6" />
        <div className="absolute inset-0 bg-gradient-rainbow opacity-10 dark:opacity-20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="py-8 md:py-10 lg:py-12">
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="relative z-10 mx-auto max-w-3xl rounded-2xl bg-card/60 p-6 text-center shadow-soft backdrop-blur-sm md:p-12"
            >
              <div className="space-y-6">
                <h1 className="text-5xl font-bold text-foreground font-display md:text-7xl">
                  <span className="text-gradient">holamundo</span>
                </h1>
                <p className="mx-auto max-w-xl text-lg text-muted-foreground md:text-xl">
                  Esta es una página de prueba minimalista construida con la máxima atención al detalle visual.
                </p>
                <div className="flex justify-center">
                  <Button
                    onClick={handleCtaClick}
                    size="lg"
                    className="btn-gradient px-8 py-4 text-lg font-semibold transition-all duration-200 ease-in-out hover:-translate-y-0.5 active:scale-95 focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background"
                  >
                    Probar Acción
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        <footer className="absolute bottom-8 text-center text-sm text-muted-foreground/80">
          <p>Built with ❤�� at Cloudflare</p>
        </footer>
      </main>
      <Toaster richColors closeButton position="top-right" />
    </>
  );
}