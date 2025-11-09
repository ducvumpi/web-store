// import { Button } from "../ui/button";
// export default function CartPage() {
//   return (
//     <div className="container mx-auto px-4 py-12">
//       <Button
//         variant="ghost"
//         onClick={() => navigate("/")}
//         className="mb-8 bg-transparent text-foreground hover:bg-accent hover:text-accent-foreground"
//       >
//         ← Back to Products
//       </Button>

//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
//         <ProductGallery
//           images={mockProduct.gallery}
//           productName={mockProduct.name}
//         />

//         <div>
//           <h1 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
//             {mockProduct.name}
//           </h1>
//           <div className="flex items-center gap-4 mb-6">
//             <div className="flex items-center">
//               {[...Array(5)].map((_, i) => (
//                 <StarIcon
//                   key={i}
//                   className={
//                     i < Math.floor(mockProduct.rating)
//                       ? "text-warning fill-warning"
//                       : "text-gray-300"
//                   }
//                   size={20}
//                   strokeWidth={2}
//                 />
//               ))}
//               <span className="ml-2 text-foreground font-medium">
//                 {mockProduct.rating}
//               </span>
//             </div>
//             <span className="text-muted-foreground">
//               ({mockProduct.reviews} reviews)
//             </span>
//           </div>
//           <p className="text-3xl font-bold text-primary mb-6">
//             ${mockProduct.price.toFixed(2)}
//           </p>
//           <p className="text-muted-foreground mb-8">
//             {mockProduct.description}
//           </p>

//           <div className="space-y-6 mb-8">
//             {mockProduct.variants.color && (
//               <div>
//                 <Label className="text-foreground mb-2 block">Color</Label>
//                 <Select value={selectedColor} onValueChange={setSelectedColor}>
//                   <SelectTrigger className="bg-background text-foreground border-border">
//                     <SelectValue placeholder="Select a color" />
//                   </SelectTrigger>
//                   <SelectContent className="bg-background text-foreground">
//                     {mockProduct.variants.color.map((color) => (
//                       <SelectItem
//                         key={color}
//                         value={color}
//                         className="text-foreground hover:bg-accent hover:text-accent-foreground cursor-pointer"
//                       >
//                         {color}
//                       </SelectItem>
//                     ))}
//                   </SelectContent>
//                 </Select>
//               </div>
//             )}

//             <div>
//               <Label className="text-foreground mb-2 block">Quantity</Label>
//               <div className="flex items-center gap-4">
//                 <Button
//                   variant="outline"
//                   size="icon"
//                   onClick={() => setQuantity(Math.max(1, quantity - 1))}
//                   className="bg-background text-foreground border-border hover:bg-accent hover:text-accent-foreground"
//                 >
//                   <MinusIcon size={20} strokeWidth={2} />
//                 </Button>
//                 <span className="text-xl font-medium text-foreground w-12 text-center">
//                   {quantity}
//                 </span>
//                 <Button
//                   variant="outline"
//                   size="icon"
//                   onClick={() => setQuantity(quantity + 1)}
//                   className="bg-background text-foreground border-border hover:bg-accent hover:text-accent-foreground"
//                 >
//                   <PlusIcon size={20} strokeWidth={2} />
//                 </Button>
//               </div>
//             </div>
//           </div>

//           <Button
//             onClick={handleAddToCart}
//             size="lg"
//             className="w-full bg-primary text-primary-foreground hover:bg-secondary hover:text-secondary-foreground"
//           >
//             <ShoppingCartIcon size={20} strokeWidth={2} className="mr-2" />
//             Add to Cart
//           </Button>
//         </div>
//       </div>

//       <Tabs defaultValue="specifications" className="mb-16">
//         <TabsList className="bg-muted">
//           <TabsTrigger
//             value="specifications"
//             className="text-foreground data-[state=active]:bg-background data-[state=active]:text-foreground"
//           >
//             Specifications
//           </TabsTrigger>
//           <TabsTrigger
//             value="reviews"
//             className="text-foreground data-[state=active]:bg-background data-[state=active]:text-foreground"
//           >
//             Reviews
//           </TabsTrigger>
//         </TabsList>
//         <TabsContent value="specifications" className="mt-6">
//           <Card className="p-6 border-border bg-card">
//             <dl className="space-y-4">
//               {Object.entries(mockProduct.specifications).map(
//                 ([key, value]) => (
//                   <div key={key}>
//                     <dt className="font-semibold text-foreground mb-1">
//                       {key}
//                     </dt>
//                     <dd className="text-muted-foreground">{value}</dd>
//                     <Separator className="mt-4" />
//                   </div>
//                 )
//               )}
//             </dl>
//           </Card>
//         </TabsContent>
//         <TabsContent value="reviews" className="mt-6">
//           <div className="space-y-6">
//             {mockProduct.userReviews.map((review) => (
//               <Card key={review.id} className="p-6 border-border bg-card">
//                 <div className="flex items-start justify-between mb-3">
//                   <div>
//                     <p className="font-semibold text-foreground">
//                       {review.author}
//                     </p>
//                     <p className="text-sm text-muted-foreground">
//                       {review.date}
//                     </p>
//                   </div>
//                   <div className="flex">
//                     {[...Array(5)].map((_, i) => (
//                       <StarIcon
//                         key={i}
//                         className={
//                           i < review.rating
//                             ? "text-warning fill-warning"
//                             : "text-gray-300"
//                         }
//                         size={16}
//                         strokeWidth={2}
//                       />
//                     ))}
//                   </div>
//                 </div>
//                 <p className="text-muted-foreground">{review.comment}</p>
//               </Card>
//             ))}
//           </div>
//         </TabsContent>
//       </Tabs>
//     </div>
//   );
// }
export default function Page() {
  return <div>Cart page</div>;
}
