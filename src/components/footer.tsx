import { Card, CardContent } from '@/components/ui/card'

export function Footer() {
  return (
    <footer className="mt-8">
      <Card className="rounded-none">
        <CardContent className="px-5 py-6">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Copyright{' '}
            <strong>FSW Barber</strong>
          </p>
        </CardContent>
      </Card>
    </footer>
  )
}
